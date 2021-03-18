const router = require("express").Router();
const requestHelper = require("../common/request_helper");
const { exhibitService } = require("../services/index");
const jwtMiddleWare = require("../middleware/jwt-auth");

router.get("/getExhibit/:id", jwtMiddleWare, async (req, res) => {
  const result = await exhibitService.getExhibitById(req);
  return requestHelper.handleResponse(res, result);
});
router.get("/getAll", jwtMiddleWare, async (req, res) => {
  const result = await exhibitService.getAll();
  return requestHelper.handleResponse(res, result);
});

router.post("/createExhibit", jwtMiddleWare, async (req, res) => {
  const result = await exhibitService.createExhibit(req);
  return requestHelper.handleResponse(res, result);
});
router.post("/updateExhibit/:id", jwtMiddleWare, async (req, res) => {
  const result = await exhibitService.updateExhibit(req);
  return requestHelper.handleResponse(res, result);
});
router.post("/deleteExhibit/:id", jwtMiddleWare, async (req, res) => {
  const result = await exhibitService.deleteExhibit(req);
  return requestHelper.handleResponse(res, result);
});
router.get("/search", jwtMiddleWare, async (req, res) => {
  const result = await exhibitService.searchExhibit(req);
  return requestHelper.handleResponse(res, result);
});

module.exports = router;
