var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var note = require("../models/nueschool.js");

router.get("/", function(req, res) {
  note.selectAll(function(data) {
    var hbsObject = {
      notes: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/notes", function(req, res) {

  note.insertOne("name", req.body.notes, function(result) {
    // Send back the ID of the new quote
    // console.log(res);
    res.json({ id: result.insertId });
  });
});

router.put("/api/notes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  note.updateOne({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;