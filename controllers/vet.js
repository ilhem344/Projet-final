const Vet = require("../models/Vet");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  const {
    name,
    lastName,
    email,
    password,
    description,
    phoneNumber,
    adresse,
    parcoursAcademique,
  } = req.body;
  try {
    const newVet = new Vet({
      name,
      lastName,
      email,
      password,
      description,
      phoneNumber,
      adresse,
      parcoursAcademique,
    });

    //   check if the email exist
    const searchedVet = await Vet.findOne({ email });

    if (searchedVet) {
      return res.status(400).send({ msg: "email already exist" });
    }
    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newVet.password = hashedPassword;

    // save the user
    const newVetToken = await newVet.save();
    // generate a token
    const payload = {
      _id: newVetToken._id,
      name: newVetToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    res.status(200).send({
      Vet: newVetToken,
      msg: "user is saved",
      token: ` Bearer ${token}`,
    });
  } catch (error) {
    console.log(error.data);
    res.status(500).send({ msg: "can not save the user", err: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //   find if the user exist
    const searchedVet = await Vet.findOne({ email });
    // if thhe email not exist
    if (!searchedVet) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // password are equals
    const match = await bcrypt.compare(password, searchedVet.password);

    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // generate a token
    const payload = {
      _id: searchedVet._id,
      name: searchedVet.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    // send the Vet
    res
      .status(200)
      .send({ vet: searchedVet, msg: "success", token: ` Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not get the Vet" });
  }
};

exports.current = (req, res) => {
  res.status(200).send({ veterinaire: req.user });
};
//*******************************CRUD************************************** */
//********************POSTCONTACt********************************* */
exports.postContact = async (req, res) => {
  try {
    const newVet = new Vet(req.body);
    let resulte = await Contact.findOne({ email: req.body.email });
    if (resulte) {
      res.status(400).json("user already exists");
      return;
    }
    let result = await newVet.save();
    res.status(200).send({ message: "contact added", newVet });
  } catch (error) {
    res.status(500).send({ message: "failed to add the contact" });
  }
};

//*******************UPDATECONTACT************************* */
exports.updateContact = async (req, res) => {
  try {
    let result = await Vet.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.status(200).send({ message: "Contact Updated" });
  } catch (error) {
    res.status(400).send({ message: " we can not update " });
  }
};
//******************GETALLCONTACT************************** */
exports.getAllContact = async (req, res) => {
  let s = req.query.a;
  let newName = new RegExp(s, "i");
  console.log({ s, newName });
  try {
    if (s) {
      let result = await Vet.find({
        name: newName,
      });
      res.status(200).json({ message: "all contact", result });
      return;
    }
    let result = await Vet.find();
    res.status(200).json({ message: "all contact", result });
  } catch (error) {
    res.status(400).send({ message: "failed " });
  }
};
//********************DELETECONTACT********************** */
exports.deleteContact = async (req, res) => {
  try {
    let result = await Vet.findByIdAndDelete(req.params.id);
    res.send({ message: "Contact deleted" });
  } catch (error) {
    res.status(400).send({ message: "No contact found  " });
  }
};
//*****************GETCONTACTBYID************************** */
exports.getContactById = async (req, res) => {
  try {
    let result = await Vet.findById(req.params.id);
    res.send({ message: "all contact", result });
  } catch (error) {
    res.status(400).send({ message: "No contact found  " });
  }
};
