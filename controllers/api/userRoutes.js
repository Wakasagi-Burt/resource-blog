const router = require('express').Router();
const {User, post, video} = require('../../models');
const withAuth = require('../../utils/auth');






//CREATE USER
router.post('/signup', async (req, res) => 
{
  console.log(req);
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//USER LOGIN
router.post('/login', async (req, res) => {
  // console.log("I am in login");
  // console.log("req.body= ",req.body);
    try {
      // Find the user who matches the posted e-mail address
      const userData = await User.findOne({ where: { email: req.body.email } });
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
      // return;
      // console.log("userData= ",userData);
      // console.log("req.body= ",req.body);
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      
      // Verify the posted password with the password store in the database
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Create session variables based on the logged in user
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //USER LOGOUT
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {        // Remove the session variables
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  