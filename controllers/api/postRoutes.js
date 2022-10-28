const router = require('express').Router();
const {Post} = require('../../models');
const withAuth = require('../../utils/auth');






// Create a new post route
router.post('/discussion', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({     // new post object
      ...req.body,                          // read input
      user_id: req.session.user_id,         // require user ID
    });

    res.status(200).json(newPost);          // successful post
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete route
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({  // Destroy becasue deleting
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });
//     console.log(req);
//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;