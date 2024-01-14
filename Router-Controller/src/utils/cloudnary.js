import {v2 as cloudinary} from "cloudinary"
import fs from "fs"  // this is file liberay 




          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:  process.env.CLOUDINARY_API_SECRET
});


const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null 
        // upload the file on cloudinary 
        const respone = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file is uploaded done 
        console.log("File is Upload on cloudinary", respone.url)
        return respone;

    } catch (error) {
        fs.unlinkSync(localFilePath) // Remove File from Server Upload has been failed
        return null;
    }
}

export {uploadCloudinary}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });