import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/upload')
    },
    filename: (req, file, cb) => {
        console.log(req.files)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })
export default upload