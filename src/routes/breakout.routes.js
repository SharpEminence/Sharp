const router = require("express").Router();
const requestHelper = require("../common/request_helper");
const { breakoutService } = require("../services/index");
const jwtMiddleWare = require("../middleware/jwt-auth");

router.get("/getAll", jwtMiddleWare, async (req, res) => {
  const result = await breakoutService.getBreakout();
  return requestHelper.handleResponse(res, result);
});
router.post("/createBreakout", jwtMiddleWare, async (req, res) => {
  const result = await breakoutService.createBreakout(req);
  return requestHelper.handleResponse(res, result);
});

router.post("/updateBreakout/:id", jwtMiddleWare, async (req, res) => {
  const result = await breakoutService.updateBreakout(req);
  return requestHelper.handleResponse(res, result);
});
router.post("/deleteBreakout/:id", jwtMiddleWare, async (req, res) => {
  const result = await breakoutService.deleteBreakout(req);
  return requestHelper.handleResponse(res, result);
});
router.get('/search', jwtMiddleWare, async (req, res)=>{
    const result = await breakoutService.searchSession(req)
    return requestHelper.handleResponse(res, result)
  })
module.exports = router;
