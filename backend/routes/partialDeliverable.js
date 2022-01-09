const express = require("express");
const router = express.Router();
const partialDeliverableController =
  require("../controllers").partialDeliverable;

router.get("/", partialDeliverableController.getAllPartialDeliverables);
router.get("/:id", partialDeliverableController.getPartialDeliverableById);
router.post("/", partialDeliverableController.addPartialDeliverable);

module.exports = router;
