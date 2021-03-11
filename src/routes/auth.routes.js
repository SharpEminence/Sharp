const router = require('express').Router()
const requestHelper = require('../common/request_helper');
const { authService } = require("../services/index")
const jwtMiddleWare = require('../middleware/jwt-auth')

    //login
    router.post('/login', async (req, res) => {
        const body = req.body
        const result = await authService.login(body)
        res.render('loginPost',{data:result.response});
        return requestHelper.handleResponse(res, result)
    })
  


module.exports = router