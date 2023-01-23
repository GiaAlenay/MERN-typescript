import axios from "axios";
import { interVideos } from "../Components/Videos/Video";
const baseUrl='http://localhost:5000'

export const getAllVideos=async()=>{    
    try {
        const response= await axios({
            url:(`${baseUrl}/video`),
            method:'GET'
        })      
            return response        
        
    } catch (error) {
        console.log(error)
    }
}

export const createVideos=async(video:interVideos)=>{
   return await axios.post(`${baseUrl}/video`,video)
}