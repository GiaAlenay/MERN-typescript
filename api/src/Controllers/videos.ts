import {RequestHandler} from 'express'
import Video from '../Models/videos'
export const getVideos:RequestHandler=async(req,res)=>{
    try {
        const videos =await Video.find()
        res.status(200).json(videos)
    } catch (error) {
        res.status(501).json({msg:error})
    }
}

export const getVideo:RequestHandler=async(req,res)=>{
    try {
        const videoFound=await Video.findById(req.params.id)

        if (!videoFound)  {res.status(204).json({msg:'Video Not Found'})}
        else { res.status(200).json(videoFound)}

    } catch (error) {
        res.status(501).json({msg:error})
    }
}

export const postVideo:RequestHandler=async(req,res)=>{
    try {

        const findUrl= await Video.findOne({url:req.body.url})
        if(findUrl){
            res.status(301).json({msg:'the URL already exists'})
        }
        else{
            const video= new Video(req.body)
            const saveVideo= await video.save()
            res.status(200).json(saveVideo)

        }
       } catch (error) {
        res.status(500).json({msg:error})
       }
    }

export const deleteVideo:RequestHandler=async(req,res)=>{
    try {
        const videoFound=await Video.findByIdAndDelete(req.params.id)

        if (!videoFound)  {res.status(204).json({msg:'Video Not Found'})}
        else { res.status(200).json(videoFound)}

    } catch (error) {
        res.status(501).json({msg:error})
    }
}

export const updateVideo:RequestHandler=async(req,res)=>{
    try {
        const videoUpdated=await Video.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if (!videoUpdated) {
            res.status(204).json({msg:'Video Not Found'})
        }else{
            res.status(200).json(videoUpdated)
        }
    } catch (error) {
        res.status(501).json({msg:error})
    }
}