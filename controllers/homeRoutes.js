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

    
    // api call: HackerNews Api
    technews();


    res.render('homepage'); // render a page and send post data
  } catch (err) {
    res.status(500).json(err);  
  }
});

router.get('/generalresource', (req, res) => {
  res.render('generalresource')
})

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

  /*
    GETTING ARTICLES FROM
    ANOTHER SITE AS JSON AND INSERTING
    THEM INTO YOUR OWN HANDLEBAR TEMPLATE
  */

  // FIND A API THAT GIVES BACK AND ARRAY OR ARTICLES
  /*
  [
    {
      title: 'jidfeoswfa',
      date: 'fjiewoaf',
      id: 'iwoefiewof',
      description: 'fioreangkragrtesgtreafreagvaebrtsr'
    }
  ]
  */


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
