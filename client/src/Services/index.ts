import axios from "axios";
import { interVideos } from "../Components/Videos/Video";
const baseUrl='http://localhost:5000'

export const getAllVideos=async()=>{    
    try {
        return await axios({
            url:(`${baseUrl}/video`),
            method:'GET'
        })      
                   
        
    } catch (error) {
        console.log(error)
    }
}

export const createVideos=async(video:interVideos)=>{
   return await axios.post(`${baseUrl}/video`,video)
}

export const deleteVideos=async(id:string|undefined)=>{
    console.log('este es id', id)
    return await axios.delete(`${baseUrl}/video/${id}`)
}