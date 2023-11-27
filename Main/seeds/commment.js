const Comment = require("../models/Comment");

const commentData = [
  {
    comment_text: "this is a first comment",
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
