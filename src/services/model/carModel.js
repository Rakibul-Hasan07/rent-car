const { default: mongoose } = require("mongoose");

const carSchema = new mongoose.Schema({
    images: {
        type: Array
    },
    brandName: {
        type: String,
        required: [true, 'Please provide brand name'],
        trim: true,
    },
    carModelName: {
        type: String,
        required: [true, 'Please provide car model name'],
        trim: true,
    },
    bodyType: {
        type: String,
        required: [true, 'Please provide body type'],
        trim: true,
    },
    carYear: {
        type: Number,
        required: [true, 'Please provide car year']
    },
    carTransmission: {
        type: String,
        required: [true, 'Please provide car transmission'],
    },
    carEngineCapacity: {
        type: String,
        required: [true, 'Please provide brand name'],
    },
    carFuelType: {
        type: String,
        required: [true, 'Please provide car fuel type'],
    },
    carSeatingCapacity: {
        type: Number,
        required: [true, 'Please provide car seating capacity']
    },
    carNumberOfDoors: {
        type: Number,
        required: [true, 'Please provide car number of doors']
    },
    carMaximumRentalDays: {
        type: String,
        required: [true, 'Please provide car maximum rental days']
    },
    carMinimumRentalDays: {
        type: String,
        required: [true, 'Please provide car minimum rental days']
    },
    carColor: {
        type: String,
        required: [true, 'Please provide car color'],
        trim: true,
    },
    carConditon: {
        type: String,
        required: [true, 'Please provide car condition'],
        trim: true,
    },
    phoneNo: {
        type: String,
        required: [true, 'Please provide phone number'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email account'],
        trim: true,
    },
    rentPricePerDay: {
        type: Number,
        required: [true, 'Please provide rental price per day']
    },
    carDescription: {
        type: String,
        required: [true, 'Please provide car description'],
        trim: true,
    },
    acWorking: {
        type: Boolean
    },
    acAvailabe: {
        type: Boolean
    },
    blutooth: {
        type: Boolean
    },
    backupCamera: {
        type: Boolean
    },


},
    {
        timestamps: true
    }
);


const carModel = mongoose.models.cars || mongoose.model('cars', carSchema)

export default carModel;