
import upload from "@/utils/multer"
import { createEdgeRouter } from "next-connect";



const router = createEdgeRouter()

export const config =
{
    bodyParser: false
}

const uploadMiddleware = upload.array('image', 10);
router.use(uploadMiddleware).post(async (req, res) => {
    console.log(req.files)
})

async function POST(request, ctx) {
    return router.run(request, ctx);
  }
  
  
  module.exports = { POST };