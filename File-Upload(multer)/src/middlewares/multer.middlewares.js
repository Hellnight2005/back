import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "C:\Users\Abhijeet\Desktop\Abhijeet\Back\back\File-Upload(multer)\public\temp")
    },
    filename: function (req, file, cb) {
        // it created unique number 
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
      cb(null, file.originalname)

    }
  })
  
export const upload = multer({
         storage, 
})