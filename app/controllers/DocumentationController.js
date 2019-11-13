const path = require('path')
const fs = require('fs')
const multer = require('multer')
const upload = multer().single('image')
const Resize = require('../services/resize.service')
const { documentation } = require('../models')

class DocumentationController {
  async insertData(req, res) {
    await upload(req, res, async function (err) {
      //set diagnostic
      req.start = Date.now()
      let status
      let message
      let image
      let dtDocument

      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        return res.status(200).json(err)
      } else if (err) {
        // An unknown error occurred when uploading.
        return res.status(200).json(err)
      }

      //set path and resize image
      const imagePath = path.join(__dirname, '../../public/images/documentation')
      const fileUpload = new Resize(imagePath)
      image = await fileUpload.save(req.file.buffer, req.file.originalname)

      status = 200
      message = `Berhasil menambahkan data`
      const item = {
        image: image,
        description: req.body.description
      }
      dtDocument = await documentation.create(item)

      //get diagnostic
      let time = Date.now() - req.start
      const used = process.memoryUsage().heapUsed / 1024 / 1024
      const data = {
        diagnostic: {
          status: status,
          message: message,
          memoryUsage : `${Math.round(used * 100) / 100} MB`,
          elapsedTime : time,
          timestamp : Date(Date.now()).toString(),
        },
        result: {
          id: dtDocument.id
        }
      }
      return res.status(status).json(data)
    })
  }

  async selectData(req, res) {

  }

  async updateData(req, res) {

  }

  async deleteData(req, res) {

  }
}

const cocumentationController = new DocumentationController()
module.exports = cocumentationController