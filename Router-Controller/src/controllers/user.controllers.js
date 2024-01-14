import { asyncHandler } from "Router-Controller/src/utils/asyncHandler.js";


const registeruser = asyncHandler( async (req, res ) => {
    res.status(200).json({
        message: "ok"
    })
})




export {registeruser} 