const router = require('express').Router();
const {User, Post, Video} = require('../models');
const withAuth = require('../utils/auth');

// given a user lands on our page
// when they page loads
// then they are show a list of latest post extracted from our db
// HOME PAGE ROUTE - user lands here
router.get('/', async (req, res) => {
  try {  // try looking for latest post
    // const postData = await Post.findAll(); // filter that down w/ the config to get the ones you want
    // console.log(postData) // sanity check
    // const latestPosts = postData.map(function(post) { // clean post data
    //   return post.get({plain: true});  // <-- this is the object that cleans up the data from the sequilaze object garbage
    // });
    // console.log(latestPosts);
    // res.json(latestPosts);  // sanity check

    res.render('homepage'); // render a page and send post data
  } catch (err) {
    res.status(500).json(err);  
  }
});

// GIVEN a user clicks and is not loged-in, 
// THEN they are redirected to the login page.
// DISCUSSION-POSTS redirect
// Prevent non-logged users from viewing discussion post page
router.get('/postRoutes', withAuth, async (req, res) => {
    try { 
      const users = userData.map((project) => project.get({plain: true}));
      res.render('discussion-posts', {
        users,
        logged_in: req.session.logged_in,   // Pass the logged in flag to the template
      });
    } catch (err) {
      res.status(401).json(err);  //Unauthorized error specifically for use when authentication is required
    }
  });

//If a session exits
//redirect the request to the Discussion Post Page
router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the Discussion Post Page
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  });
  
module.exports = router;
