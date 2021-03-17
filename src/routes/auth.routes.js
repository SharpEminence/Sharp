const router = require('express').Router()
const requestHelper = require('../common/request_helper');
const { authService } = require("../services/index")
const jwtMiddleWare = require('../middleware/jwt-auth')
const csvdata = require("../../CSVTOJSON/index")
const data = new csvdata()

    //login
    router.post('/login', async (req, res) => {
        const body = req.body
        const result = await authService.login(body)
        return requestHelper.handleResponse(res, result)
    })
    //csv to json

    router.post('/csv',async (req, res) => {
        const body = 'data.csv'
    const result = await authService.Entercsv(body)
    return requestHelper.handleResponse(res, result)
    })
    //admin login
    router.post('/admin/login', async (req, res) => {
        const body = req.body
        const result = await authService.Adminlogin(body)
        return requestHelper.handleResponse(res, result)
    })
  
  


module.exports = router