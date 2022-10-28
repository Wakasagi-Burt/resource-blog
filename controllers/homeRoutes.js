const router = require('express').Router();
const {User, Post, Video} = require('../models');
const withAuth = require('../utils/auth');
const handleBar = require("../views/layouts/homepage.handlebars")

// given a user lands on our page
// HOME PAGE ROUTE - user lands here
router.get('/', async (req, res) => {
  try {  // try looking for latest post
    res.render('homepage'); // render a page and send post data
  } catch (err) {
    res.status(500).json(err);  
  }
});
// general resource route here user lands here
router.get('/generalresource', (req, res) => {
  res.render('generalresource')
})

// discussion handlebars route here user lands here
router.get('/discussion', async (req, res) => {
  try {  
    res.render('discussion'); 
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
router.get('/signup', (req, res) => {
    // If a session exists, redirect the request to the Discussion Post Page
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
    res.render('signup');
  });



  const technews = () => {

    fetch('https://hacker-news.firebaseio.com/v0/beststories/.json?print=pretty', {
      method: 'GET', //GET is the default.
       // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for(i = 0; i < 5; i++) {
          let id = data[i];
          apicallout(id);
        }
      });
    
    const apicallout = (idv) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${idv}.json?print=pretty`, {
      method: 'GET', //GET is the default.
       // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          let title = data['title'];
          let author = data['by'];
          let url = data['url'];
    })};}
module.exports = router;
