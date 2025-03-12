import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get('/posts', (req, res) => {
  if (posts.length === 0) {
    return res.status(404).json("Posts not found");
  } else {
    res.status(200)
        .json(posts);
  }
});
//CHALLENGE 2: GET a specific post by id
app.get('/posts/:postId', (req, res) => {
  const postId = parseInt(req.params.postId, 10);

  if (isNaN(postId)) {
    return res.status(400).json("Invalid post id. Must be a number.");
  }

  const foundPost = posts.find((post) => post.id === postId);

  if (foundPost) {
    res.status(200)
       .json(foundPost);
  } else {
    res.status(404)
       .json("Post not found");
  }
})
//CHALLENGE 3: POST a new post
app.post('/posts', (req, res) => {
  const newId = posts.length + 1;
  const newPostTitle = req.body.title;
  const newPostContent = req.body.content;
  const newPostAuthor = req.body.author;
  const newPostDate = new Date().toISOString();

  if (
    typeof newPostTitle !== "string" || 
    typeof newPostContent !== "string" || 
    typeof newPostAuthor !== "string"
  ) {
    return res.status(400).json("Title, Content and Author must be strings.")
  }
  
  if (
    newPostTitle.trim().length === 0 || 
    newPostContent.trim().length === 0 || 
    newPostAuthor.trim().length === 0
  ) {
    return res.status(400).json("Title, Content and Author must not be empty.")
  }

  const newPost = {
    id: newId,
    title: newPostTitle,
    content: newPostContent,
    author: newPostAuthor,
    date: newPostDate
  }

  posts.push(newPost);
  res.status(201).json("New post has been created.")
})

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch('/posts/:postId', (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const postTitle = req.body.title;
  const postContent = req.body.content;
  const postAuthor = req.body.author;

  if (isNaN(postId)) {
    return res.status(400).json("Invalid post id. Must be a number.");
  }

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json("Request body cannot be empty.");
  }

  if (req.body.title && (typeof req.body.title !== "string" || req.body.title.trim().length === 0)) {
    return res.status(400).json("Title must be a non-empty string.");
  }

  if (req.body.content && (typeof req.body.content !== "string" || req.body.content.trim().length === 0)) {
    return res.status(400).json("Content must be a non-empty string.");
  }

  if (req.body.author && (typeof req.body.author !== "string" || req.body.author.trim().length === 0)) {
    return res.status(400).json("Author must be a non-empty string.");
  }

  const existingPostIndex = posts.findIndex(post => post.id === postId);

  if (existingPostIndex === -1) {
    return res.status(404).json("Post not found");
  }
  
  const existingPost = posts[existingPostIndex];
  const patchedPost = { ...existingPost };

  
  patchedPost.title = postTitle || patchedPost.title;
  patchedPost.content = postContent || patchedPost.content;
  patchedPost.author = postAuthor || patchedPost.author;

  posts[existingPostIndex] = patchedPost;
  res.status(200).json("Post has been patched.")
});

//CHALLENGE 5: DELETE a specific post by providing the post id.

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
