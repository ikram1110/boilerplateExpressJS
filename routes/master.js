const express = require('express')
const router = express.Router()
const { memberController } = require('../app/controllers')
const { documentationController } = require('../app/controllers')

router.get('/member', memberController.selectData)  //select all
router.get('/member/:id', memberController.selectData)  //select by id
router.post('/member', memberController.insertData)  //insert
router.put('/member/:id', memberController.updateData)  //update
router.delete('/member/:id', memberController.deleteData)  //delete

router.get('/documentation', documentationController.selectData)  //select all
router.get('/documentation/:id', documentationController.selectData)  //select by id
router.post('/documentation', documentationController.insertData)  //insert
router.put('/documentation/:id', documentationController.updateData)  //update
router.delete('/documentation/:id', documentationController.deleteData)  //delete

module.exports = router