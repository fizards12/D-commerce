const { readFile } = require("node:fs/promises");
const path = require("node:path")
const multer = require("multer");

const getImagePath = async(imagePath)=>{
    try {
        const fullPath = path.resolve(__dirname,"..","assets",imagePath);
        await readFile(fullPath)
        return fullPath
    } catch (error) {
        throw "<h1>Wrong Image Path!</h1>"
    }
}

const uploadImageMiddleware = ()=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "./assets/");
        },
        filename: function (req, file, cb) {
          cb(
            null,
            req.body.name.replaceAll(/ /g, "") +
              "." +
              file.originalname.split(".").pop()
          );
        },
      });
      
      const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
          if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            // Reject file if the extension is not an image
            return cb(new Error("Only image files are allowed"));
          }
          cb(null, true); // Accept the file
        },
      });
      return upload
}

module.exports = {getImagePath,uploadImageMiddleware}