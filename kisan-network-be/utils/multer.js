let multer = require("multer");

let upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

module.exports = upload;