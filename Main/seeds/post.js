const Post = require("../models/Post");

const postData = [
  {
    title: "title 1",
    content: "firstly- some text content",
    user_id: 1,
  },
  {
    title: "title 2",
    content: "again.... some text content alkjdaskjdasd..",
    user_id: 2,
  },
  {
    title: "title 3",
    content: "some more text content here asdaokjsdjjaksjdkasjdasd.....",
    user_id: 2,
  },
  {
    title: "title 4",
    content: "some text content here...asdajsndasdasd",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
