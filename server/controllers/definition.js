const { queryWordData } = require("../models/queryWordData.js");

const {
  queryIncrementDownvoteDefinition
} = require("../models/queryIncrementDownvoteDefinition.js");

const {
  queryIncrementUpvoteDefinition
} = require("../models/queryIncrementUpvoteDefinition.js");

module.exports = {
  postWordData(req, res) {
    queryWordData(req.body, (error, wordData) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json(wordData);
      }
    });
  },
  putIncrementDownvoteDefinition(req, res) {
    queryIncrementDownvoteDefinition(req.body, (error, downvoteData) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json(downvoteData);
      }
    });
  },
  putIncrementUpvoteDefinition(req, res) {
    queryIncrementUpvoteDefinition(req.body, (error, upvoteData) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json(upvoteData);
      }
    });
  }
};
