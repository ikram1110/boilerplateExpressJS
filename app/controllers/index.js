const authController = require('./AuthController')
const memberController = require('./MemberController')
const documentationController = require('./DocumentationController')

const controllers = {
  authController,
  memberController,
  documentationController
}

module.exports = controllers