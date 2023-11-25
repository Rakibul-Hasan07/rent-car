const { default: mongoose } = require("mongoose");

const bookingSchema = new mongoose.Schema({
    district: {
        type: String,
        required: [true, 'Please provide district name'],
        trim: true,
    },
    city: {
        type: String,
        required: [true, 'Please provide city name'],
        trim: true,
    },
    street: {
        type: String,
        required: [true, 'Please provide street name'],
        trim: true,
    },
    brandName: {
        type: String,
        required: [true, 'Please provide brand name'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    paymentStatus: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: true
    },
    numberOfBookingDay: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
},
    {
        timestamps: true
    }
);


const bookingModel = mongoose.models.bookings || mongoose.model('bookings', bookingSchema)

export default bookingModel;