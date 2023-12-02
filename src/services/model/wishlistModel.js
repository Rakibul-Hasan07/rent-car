const { default: mongoose, Schema } = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    wishListCarId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    brandName: {
        type: String,
        required: [true, 'Please provide brand name'],
        trim: true,
    },
    carTransmission: {
        type: String,
        required: [true, 'Please provide car transmission'],
    },
    carEngineCapacity: {
        type: String,
        required: [true, 'Please provide brand name'],
    },
    wishListUserEmail: {
        type: String,
        required: [true, 'Please provide your email account'],
        trim: true,
    }
},
    {
        timestamps: true
    }
);

const wishlistModel = mongoose.models.wishlist || mongoose.model('wishlist', wishlistSchema);

export default wishlistModel;
