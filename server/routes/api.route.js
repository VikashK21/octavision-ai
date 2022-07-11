const router = require("express").Router();
const ContrlT = new (require("../controllers/cusmoter.controller"))();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/customers", ContrlT.allData);
router.post("/customer", ContrlT.CreateData);
router.get("/customer/:id", ContrlT.DataById);

module.exports = router;
