import imagekit from "../configs/imagekit.js"
import { inngest } from "../inngest/index.js"
import Connection from "../models/Connection.js"
import Post from "../models/Post.js"
import User from "../models/User.js"
import fs from 'fs'

// Get User Data using userId
export const getUserData = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const user = await User.findById(userId)
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        res.json({ success: true, user })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Update User Data using userId
export const updateUserData = async (req, res) => {
    try {
        const { userId } = await req.auth()
        let {username, bio, location, full_name} = req.body;

        const tempUser = await User.findById(userId)
        
        !username && (username = tempUser.username)

        if (tempUser.username !== username) {
            const user = await User.findOne({username})
            if (user) {
                // We will not change the username if it is alerady taken by another user
                username = tempUser.username
            }
        }

        const updatedData = {
            username,
            bio,
            location,
            full_name   
        }
        const profile = req.files.profile && req.files.profile[0]
        const cover = req.files.cover && req.files.cover[0]

        if(profile){
            const buffer = fs.readFileSync(profile.path)
            const response = await imagekit.upload({
                file: buffer,
                fileName: profile.originalname,
            })

            const url = imagekit.url({
                path: response.filePath,
                transformation: [
                    {quality: 'auto'},
                    {format: 'webp'},
                    {width: '512'}
                ]
            })
            updatedData.profile_picture = url;
        }

        if(cover){
            const buffer = fs.readFileSync(cover.path)
            const response = await imagekit.upload({
                file: buffer,
                fileName: profile.originalname,
            })

            const url = imagekit.url({
                path: response.filePath,
                transformation: [
                    {quality: 'auto'},
                    {format: 'webp'},
                    {width: '1280'}
                ]
            })
            updatedData.cover_photo = url;
        }

        const user = await User.findByIdAndUpdate(userId, updatedData, {new: true})

        res.json({success: true, user, message: 'Profile updated successfully'})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }   
}

// Find Users using username, email, location, name
export const discoverUsers = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const {input} = req.body;

        const allUsers = await User.find(
            {
                $or: [
                    {username: new RegExp(input, 'i')},
                    {email: new RegExp(input, 'i')},
                    {full_name: new RegExp(input, 'i')},
                    {location: new RegExp(input, 'i')}
                ]
            }
        )

        const filteredUsers = allUsers.filter(user=> user._id !== userId);
        res.json({ success: true, users: filteredUsers })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Follow User
export const followUser = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const {id} = req.body;

        const user = await User.findById(userId)

        if(user.following.includes(id)) {
            return res.json({success: false, message: 'You are already following this user'})
        }

        if (!user.following.includes(id)) {
            user.following.push(id);
        }
        await user.save()

        const toUser = await User.findById(id)
        if (!toUser.followers.includes(userId)) {
            toUser.followers.push(userId)
        }
        await toUser.save()

        res.json({success: true, message: 'Now you are following this user'})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Unfollow the user
export const unfollowUser = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const {id} = req.body;

        const user = await User.findById(userId)

        user.following = user.following.filter(user=> user !== id);
        await user.save()

        const toUser = await User.findById(userId)
        toUser.followers = toUser.followers.filter(user=> user !== userId);
        await toUser.save()

        res.json({success: true, message: 'You are no longer following this user'})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Send Connection Request
export const sendConnectionRequest = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const { id } = req.body;

        // Check if user has sent more than 20 connections requests in the last 24 hours
        const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000)
        const connectionRequest = await Connection.find({ from_user_id: userId, createdAt: { $gt: last24Hours } })
        if (connectionRequest.length >= 20) {
            return res.json({ success: false, message: 'You have sent more than 20 connections requests in the last 24 hours' })
        }

        // Check if there's already a pending request from userId to id
        const existingPending = await Connection.findOne({ from_user_id: userId, to_user_id: id, status: 'pending' })
        if (existingPending) {
            return res.json({ success: false, message: 'Connection request pending' })
        }

        // Check if users are already connected
        const connectionAccepted = await Connection.findOne({
            $or: [
                {from_user_id: userId, to_user_id: id},
                {from_user_id: id, to_user_id: userId},
            ],
            status: 'accepted'
        })

        if(connectionAccepted) {
            return res.json({success: false, message: 'You are already connected with this user'})
        }

        // Check if there's a pending request from either side
        const pendingConnection = await Connection.findOne({
            $or: [
                {from_user_id: userId, to_user_id: id},
                {from_user_id: id, to_user_id: userId},
            ],
            status: 'pending'
        })
        if (pendingConnection) {
            return res.json({ success: false, message: 'Connection request pending' })
        }

        const newConnection = await Connection.create({
            from_user_id: userId,
            to_user_id: id
        })

        await inngest.send({
            name: 'app/connection-request',
            data: {connectionId: newConnection._id}
        })
        
        return res.json({success: true, message: 'Connection request sent successfully'})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Get User Connection
export const getUserConnections = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const user = await User.findById(userId).populate('connections followers following')

        const connections = user.connections
        const followers = user.followers
        const following = user.following

        const pendingSet = new Set()
        const pendingConnections = (await Connection.find({to_user_id: userId, status: 'pending'}).populate('from_user_id')).filter(connection => {
            const fromUserId = connection.from_user_id?._id?.toString() || connection.from_user_id
            if (pendingSet.has(fromUserId)) return false
            pendingSet.add(fromUserId)
            return true
        }).map(connection => connection.from_user_id)

        const uniqueConnections = user.connections.reduce((acc, item) => {
            const idValue = item?._id?.toString() || item
            if (!acc.find(existing => (existing?._id?.toString() || existing) === idValue)) {
                acc.push(item)
            }
            return acc
        }, [])

        const uniqueFollowers = user.followers.reduce((acc, item) => {
            const idValue = item?._id?.toString() || item
            if (!acc.find(existing => (existing?._id?.toString() || existing) === idValue)) {
                acc.push(item)
            }
            return acc
        }, [])

        const uniqueFollowing = user.following.reduce((acc, item) => {
            const idValue = item?._id?.toString() || item
            if (!acc.find(existing => (existing?._id?.toString() || existing) === idValue)) {
                acc.push(item)
            }
            return acc
        }, [])

        res.json({ success: true, connections: uniqueConnections, followers: uniqueFollowers, following: uniqueFollowing, pendingConnections })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Accept Connections Request
export const acceptConnectionsRequest = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const { id } = req.body;
        const connection = await Connection.findOne({from_user_id: id, to_user_id: userId})

        if(!connection) {
            return res.json({success: false, message: 'Connections not found'})
        }

        const user = await User.findById(userId);
        if (!user.connections.includes(id)) {
            user.connections.push(id);
        }
        await user.save()

        const toUser = await User.findById(id);
        if (!toUser.connections.includes(userId)) {
            toUser.connections.push(userId);
        }
        await toUser.save()

        connection.status = 'accepted';
        await connection.save()

        res.json({success: true, message: 'Connection accepted successfully'})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// Get User Profile
export const getUserProfiles = async (req, res) => {
    try {
        const {profileId} = req.body;
        if (!profileId) {
            return res.status(400).json({success: false, message: 'Missing profileId'})
        }
        const profile = await User.findById(profileId)
        if (!profile) {
            return res.status(404).json({success: false, message: 'Profile not found'})
        }

        const posts = await Post.find({user: profileId}).populate('user')
        return res.status(200).json({success: true, profile, posts})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }
}