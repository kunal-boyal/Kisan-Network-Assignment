const express = require('express')
const router = express.Router();

const upload = require("../utils/multer")
const { uploadContacts, sendMessage } = require("../controllers/contactsController")

router.post('/uploadContacts', upload.single("fileName"), uploadContacts)
router.post('/sendMessage', sendMessage)


module.exports = router