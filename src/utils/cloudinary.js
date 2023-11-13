import cloudinary from 'cloudinary'


cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUD_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUD_API_SECRET
})

const uploads = (file, folder) => {
    console.log('file', file)
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            file?.name,
            (result) => {
                console.log('result', result)
                resolve({
                    public_id: result.public_id,
                    url: result.url
                });
            },
            {
                resource_type: 'auto',
                folder: folder
            }
        )
    })
}




export  {cloudinary, uploads};