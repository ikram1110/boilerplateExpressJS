const { member } = require('../models')

class MemberController {
  async insertData(req, res) {
    return 1;
  }

  async selectData(req, res) {
    //set diagnostic
    req.start = Date.now()
    let status
    let message

    //set data
    const dtMember = await member.findAll({order: [['id','ASC']]})
    if (!dtMember) {
      status = '404'
      message = 'Data member tidak ditemukan'
    }
    else {
      status = '200'
      message = 'sukses'
    }

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
      result: dtMember
    }
    return res.status(status).json(data)
  }

  async updateData(req, res) {
    return 1;
  }

  async deleteData(req, res) {
    return 1;
  }
}

const memberController = new MemberController()
module.exports = memberController