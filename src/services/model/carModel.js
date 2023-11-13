const { default: mongoose } = require("mongoose");

const carSchema = new mongoose.Schema({
    images: [
        {
            public_id: String,
            url: String,
        },
    ],
});


const carModel = mongoose.model('cars', carSchema)

export default carModel;