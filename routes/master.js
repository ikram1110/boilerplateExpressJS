const express = require('express')
const router = express.Router()
const { memberController } = require('../app/controllers')

router.get('/member', memberController.selectData)
router.get('/member/:id', memberController.selectData)
router.post('/member', memberController.insertData)
router.put('/member/:id', memberController.updateData)
router.delete('/member/:id', memberController.deleteData)

module.exports = router