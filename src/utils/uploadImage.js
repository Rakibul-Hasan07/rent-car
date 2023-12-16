import { uploads } from "./cloudinary"
import fs from 'fs'


export const uploadCarImages = async (req, res, next) => {
    const uploader = async(path) => await uploads(path, 'car/upload')
    const urls =[]
    const files = req.files;
    for(const file of files){
        const {path} = files;
        const imgURL = await uploader(path);
        urls.push(imgURL);
        fs.ullinkSync(path);
    }
}