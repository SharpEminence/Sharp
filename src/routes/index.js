const router = require("express").Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const agendaRoutes = require("./agenda.routes");
const breakoutRoutes = require("./breakout.routes")
const exhibitRoutes = require("./exhibit.routes")
const faqRoutes = require("./faq.routes")

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/agenda",agendaRoutes);
router.use("/breakout",breakoutRoutes);
router.use("/exhibit",exhibitRoutes);
router.use("/faq",faqRoutes)

module.exports = router;
