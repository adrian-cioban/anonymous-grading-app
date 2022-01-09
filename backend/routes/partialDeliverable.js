const express = require("express");
const router = express.Router();
const partialDeliverableController =
  require("../controllers").partialDeliverable;

router.get("/", partialDeliverableController.getAllPartialDeliverables);
router.post("/", partialDeliverableController.addPartialDeliverable);

module.exports = router;
