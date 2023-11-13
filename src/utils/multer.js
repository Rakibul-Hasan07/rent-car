import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cd(null, '/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toString() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    console.log(file)
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    }
    else {
        cb({ 'error': 'Unsupported file format. Upload only JPEF/JPG or PNG' }, false)
    }
}

const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 },
    fileFilter
})

export default upload;