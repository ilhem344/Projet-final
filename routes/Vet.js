const express = require("express");
const router = express.Router();
const controllers = require("../controllers/vet");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validatorVet");

// router.get("/", (req, res) => {
//   res.send("hello world");
// });

//@method POST
//@desc POST A Vet
// @PATH  http://localhost:5000/vet/register
// @Params  Body
// register
router.post("/register", registerRules(), validation, controllers.register);

//@method POST
//@desc POST A Vet
// @PATH  http://localhost:5000/vet/login
// @Params  Body
// register
// login
router.post("/login", loginRules(), validation, controllers.login);
//@method GET
//@desc GET A USER
// @PATH  http://localhost:5000/vet/current
// @Params  Body
// get current user
router.get("/current", isAuth(), controllers.current);
////****************************CRUD*************************** */
//@method Post
//path localhost:5000/vet/
// add a conatct
//params body

router.post("/", controllers.postContact);

//*********************************************************** */
//@method getallvet
//path localhost:5000/vet/name/:s
// get all conatct
router.get("/name/:a?", controllers.getAllContact);

//*********************************************************** */
//@method get vet byid
//path localhost:5000/vet/:id
// get one vet by id
router.get("/:id", controllers.getContactById);

//************************************************************* */
//@method Delete contact byid
//path localhost:5000/vet/:id
// Delete one conatct by id
router.delete("/:id", controllers.deleteContact);

//*********************************************************** */
//@method Put contact
//path localhost:5000/vet/:id
// update contact by id
router.put("/:id", controllers.updateContact);
module.exports = router;
