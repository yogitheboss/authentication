import express from 'express'
import {authUser,registerUser,logoutUser,getUser,updateUser} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'
const router=express.Router()

router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.post('/',registerUser)

// router.get('/profile',getUser)
// router.put('/profile',updateUser)
router.route('/profile').get(protect,getUser).put(protect,updateUser)

export default router