const express = require('express');
const router = express.Router();

let posts = [
  { id: 1, title: "Posts One" },
  { id: 2, title: "Posts Two" },
  { id: 3, title: "Posts Three" },
];


// get all posts
router.get("/", (req, res) => {
  res.status(200).json(posts);
});


// // get single post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ message: `A post with ${id} not found` });
  } else {
    res.json(post);
  }
});

// create posts
router.post('/',(req,res)=>{
  // console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title:req.body.title
  }
  if(!newPost.title ){
    return res.status(404).json({msg:'Please include a title'})
  }
  posts.push(newPost);
  res.status(200).json(posts)
  
})

// update post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `The post with id ${id} was not found` });
  }

  // Update the post title
  post.title = req.body.title ;

  // Return the updated posts array and message in one object
  // res.status(200).json({posts,
  //   msg: `Post with id ${id} updated`,
  // });
    res.status(200).json(posts);
});


// delete post
router.delete('/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  const post = posts.find((post)=> post.id === id);
  
  if(!post){
    return res
    .status(404)
    .json({ msg: `The post with id ${id} was not found` });
  }
 posts = posts.filter((post)=> post.id !== id);
  res.status(200).json(posts);
})

module.exports = router;