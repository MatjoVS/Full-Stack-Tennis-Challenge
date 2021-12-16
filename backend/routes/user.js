var express = require("express");
var router = express.Router();
const users = require("../routes/users");
const User = require("../models/User");

router.get("/", function (req, res, next) {
  res.json("user page");
});
// CREATE one user in Postman. through POST using the key values to be able to test the R.U.D.
// READ = search function
router.post("/userDatabase", function (req, res) {
  User.find({ utr: req.body.utr })
    .then((results) => {
      console.log("THESE ARE ALL OUR RESULTS: ", results);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});
// User.findById the user method used themost to find someone based on Id. stored in database.
//router// get//
router.get("/findById/:userId", function (req, res) {
  User.findById((req.params.userId))
    .then((results) => {
      console.log("THESE ARE ALL OUR RESULTS: ", results);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

// UPDATE = modify an existing record
//First argument, object that we're searching for
//Second, what we will be updating

// let secondFavoriteSurfaceItem= favoriteSurface (add the new fav surface from existing list of favoriteSurfaces)
router.post("/findAndUpdate/:updateId", function (req, res) {
  //need to add new surf to req.body
  //

  User.findByIdAndUpdate(req.params.updateId, {
    $addToSet:{favoriteSurface: req.body.favoriteSurface}
  })
    .then((results) => {
      res.json(results)
      console.log("Update successful: ", results);
    })
    .catch((err) => {
      console.log("Something went wrong: ", err);
    });
});
// DELETE
router.delete("/findAndRemove/:userId", function (req, res) {
  User.findByIdAndRemove(req.params.userId )
    .then((res) => {
      console.log("User was deleted", res);
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });
});

module.exports = router;

// ADD MULTIPLE SAERCH METHODS ONCE YOUR MVP IS DEPLOYED
// Filter, display, and sort
// router.get('')
//   User.find( gameStyle, favoriteSurface, age, {age:1, id:0}, { sort: {utr: 1 } })
//    .then((results) => {
//      console.log('THESE ARE ALL OUR RESULTS: ', results);
//    })
//    .catch((err) => {
//      console.log('Something went wrong', err);
//    });

// //filter via array methods
//     User.find()
//    .then((results) => {
//      results = results.filter((user) => {
//       return user.age > 21 && user.age;
//     });
//      console.log("THESE ARE ALL OUR RESULTS: ", results);
//    })
//    .catch((err) => {
//      console.log("Something went wrong", err);
//    });

//     User.find()
//    .then((results) => {
//      results = results.filter((user) => {
//       return user.age < 21 && user.age;
//     });
//      console.log("THESE ARE ALL OUR RESULTS: ", results);
//    })
//    .catch((err) => {
//      console.log("Something went wrong", err);
//    });
