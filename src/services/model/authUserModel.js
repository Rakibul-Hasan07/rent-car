const { default: mongoose } = require("mongoose");
import validator from 'validator';

const authUserSchema = new mongoose.Schema({
    image: {
      type: String
    },
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: [true, 'Please provide unique email'],
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
  });

  
const authUserModel = mongoose.models.authUser || mongoose.model('authUser', authUserSchema);

export default authUserModel;