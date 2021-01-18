const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Pub = require("../models/Pub");
const Post = require("../models/Post");

//**********GET ALL POSTS*********************** */
router.get("/allpost", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});
//**********************CREATE POST******************************** */
router.post("/createpost", isAuth(), (req, res) => {
  const { title, body, pic } = req.body;
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }
  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log({ ...req });
});
// **************************GET MY POSTS********************** */
router.get("/mypost", isAuth(), (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("PostedBy", "_id name")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});
//***********like a post********************** */
router.put("/like", isAuth(), (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/comment", isAuth(), (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.delete("/deletepost/:postId", isAuth(), (req, res) => {
  Post.findOne({ _id: req.params.postId }).exec((err, post) => {
    if (err || !post) {
      return res.status(422).json({ error: err });
    }
    if (post.postedBy._id.toString() === req.user._id.toString()) {
      post
        .remove()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});
// router.get("/getsubpost", requireLogin, (req, res) => {
//   // if postedBy in following
//   Post.find({ postedBy: { $in: req.user.following } })
//     .populate("postedBy", "_id name")
//     .populate("comments.postedBy", "_id name")
//     .sort("-createdAt")
//     .then((posts) => {
//       res.json({ posts });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.put("/unlike", isAuth(), (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

//**********GET ALLPUBS*********************** */
router.get("/allpub", (req, res) => {
  Pub.find()
    .then((pubs) => {
      res.json({ pubs });
    })
    .catch((err) => {
      console.log(err);
    });
});
//****************ALL PUBS QUERY SELECTOR **************** */
router.get("/:a?", async (req, res) => {
  let s = req.query.a;
  let newName = new RegExp(s, "i");
  console.log({ s, newName });
  try {
    if (s) {
      let result = await Pub.find({
        name: newName,
      });
      res.status(200).json({ message: "all pub", result });
      return;
    }
    let result = await Pub.find();
    res.status(200).json({ message: "all contact", result });
  } catch (error) {
    res.status(400).send({ message: "failed " });
  }
});
//**********************CREATE POST******************************** */
router.post("/createpub", isAuth(), (req, res) => {
  const {
    email,
    name,
    lastName,
    adresse,
    photo,
    parcoursAcademique,
    description,
    phoneNumber,
  } = req.body;
  if (
    !email ||
    !name ||
    !lastName ||
    !adresse ||
    !photo ||
    !parcoursAcademique ||
    !description ||
    !phoneNumber
  ) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }
  const pub = new Pub({
    email,
    name,
    lastName,
    adresse,
    photo,
    parcoursAcademique,
    description,
    phoneNumber,
    postedBy: req.user,
  });
  pub
    .save()
    .then((result) => {
      res.json({ pub: result });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log({ ...req });
});
//************************MY PUB********************** */
router.get("/mypub", isAuth(), (req, res) => {
  Pub.find({ postedBy: req.user._id })
    .populate("PostedBy", "_id name")
    .then((mypub) => {
      res.json({ mypub });
    })
    .catch((err) => {
      console.log(err);
    });
});
//*************************Edit Pub********************** */
router.put("/edit/:id", async (req, res) => {
  try {
    let result = await Pub.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.status(200).send({ message: "Pub Updated", result: result });
  } catch (error) {
    res.status(400).send({ message: " we can not update " });
  }
});
//********************************Get PUB BY ID ************/
router.get("/pub/:id", isAuth(), async (req, res) => {
  try {
    let result = await Pub.findById(req.params.id);
    res.send({ message: "Pub", result });
  } catch (error) {
    res.status(400).send({ message: "No contact found  " });
  }
});
module.exports = router;
