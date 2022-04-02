const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'upload/'})

const app = express()

app.post('/profile',upload.single('avatar'),function (req,res,next) {
    req.file
})