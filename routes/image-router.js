const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const { uploadImageController, fetchImagesController, deleteImageController } = require('../controllers/image-controller')

// upload the image 
router.post(
    '/upload',
    authMiddleware,
    adminMiddleware,
    uploadMiddleware.single('image'),
    uploadImageController);



// to get all the image 
router.get('/get', authMiddleware, fetchImagesController);

// delete image route 
router.delete('/:id', authMiddleware, adminMiddleware, deleteImageController);



module.exports = router;


// 682fff66a582fa7d37176d59 john user id 

// image id john 683000d6a582fa7d37176d5c deleted already