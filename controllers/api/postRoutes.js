const router = require('express').Router();
const {Post} = require('../../models/Post');
const withAuth = require('../../utils/auth');

// Create a new Blog Post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({     // new postBlog object
      title: req.body.title,
      postdate: req.body.postdate,  // <-- we need to write a function on js file to insert the auto date
      content: req.body.content,
      username: req.body.username,          // read input
      user_id: req.session.user_id,         // require user ID to post on blog
    });

    res.status(200).json(newPost);          // successful post
  } catch (err) {
    res.status(400).json(err);
  }
});

//Sending the data to the model and view
router.put('/:id', async (req, res) => {  //makes promise
  try {
    const post = await Post.update (  // Wait until result is resolved to post
      {
        title: req.body.title,        // Creating object of Blog Post
        postdate: req.body.postdate,
        content: req.body.postdate,
        username: req.body.username,
      },
      {
        where: {                      // Where there's a required ID
          id: req.params.id,
        },
      }
    );  
    req.status(200).json(post);  
  } catch (error) {
    res.status(500).json(500);
  }
});

module.exports = router;