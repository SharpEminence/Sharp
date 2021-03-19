const router = require("express").Router();
const requestHelper = require("../common/request_helper");
const { faqService } = require("../services/index");
const jwtMiddleWare = require("../middleware/jwt-auth");

router.get("/getAll", jwtMiddleWare, async (req, res) => {
  const result = await faqService.getFaq();
  return requestHelper.handleResponse(res, result);
});
router.post("/createFaq", jwtMiddleWare, async (req, res) => {
  const result = await faqService.createFaq(req);
  return requestHelper.handleResponse(res, result);
});

router.post("/updateFaq/:id", jwtMiddleWare, async (req, res) => {
  const result = await faqService.updateFaq(req);
  return requestHelper.handleResponse(res, result);
});
router.post("/deleteFaq/:id", jwtMiddleWare, async (req, res) => {
  const result = await faqService.deleteFaq(req);
  return requestHelper.handleResponse(res, result);
});
router.get('/search', jwtMiddleWare, async (req, res)=>{
    const result = await faqService.searchFaq(req)
    return requestHelper.handleResponse(res, result)
  })
module.exports = router;
