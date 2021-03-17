const router = require('express').Router()
const requestHelper = require('../common/request_helper');
const { userService } = require("../services/index")
const jwtMiddleWare = require('../middleware/jwt-auth')

    
    router.get('/getProfile/:id',jwtMiddleWare, async (req, res) => {
        const result = await userService.getProfile(req)
        return requestHelper.handleResponse(res, result)
    })

    router.post('/updateProfile/:id',jwtMiddleWare,async(req,res)=>{
        const result = await userService.updateProfile(req)
        return requestHelper.handleResponse(res,result)
    })
    router.post('/updatepic/:id',jwtMiddleWare,async(req,res)=>{
        const result = await userService.uploadProfileImage(req)
        return requestHelper.handleResponse(res,result)
    })
  


module.exports = router