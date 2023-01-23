import {Router } from "express";
import { getVideos,getVideo,deleteVideo,postVideo,updateVideo } from "../Controllers/videos";
const router=Router()

router.get('/video', getVideos);
router.get('/video/:id',getVideo)
router.post('/video',postVideo)
router.delete('/video/:id', deleteVideo)
router.put('/video/:id', updateVideo)

export default router;