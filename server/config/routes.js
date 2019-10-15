const {
  postIncrementVisitsToWord,
  getVisitsForWord
} = require("../controllers/activity.js");

const {
  postWordData,
  putIncrementDownvoteDefinition,
  putIncrementUpvoteDefinition
} = require("../controllers/definition.js");

module.exports = app => {
  app.post("/definition/word", postWordData); // change to post request?
  app.put("/definition/downvote", putIncrementDownvoteDefinition);
  app.put("/definition/upvote", putIncrementUpvoteDefinition);
  app.post("/activity/word/getVisits", getVisitsForWord);
  app.post("/activity/word/incrementVisit", postIncrementVisitsToWord);
};
