import axios from "axios";
export const getAllVideos=async()=>{
    
    try {
        const response= await axios({
            url:'http://localhost:5000/video',
            method:'GET'
        })
      
            return response          
        
        
    } catch (error) {
        console.log(error)
    }
}