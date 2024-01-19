// Create web server
// Route: /comments
// Method: GET

// Import express
const express = require("express");
// Create router
const router = express.Router();
// Import comment controller
const controller = require("../controllers/comments");

// Handle request to /comments
router.get("/", controller.getComments);

// Export router
module.exports = router;