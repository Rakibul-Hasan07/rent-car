import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    trim: true,
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        });
      },
      message: 'Password must meet the strong password requirements',
    },
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords don't match",
    },
  },
  conditions: {
    type: Boolean
  }
});

// userSchema.pre('save', async function (next) {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(this.password, salt);
//   this.password = hashedPassword;
//   this.confirmPassword = undefined;
//   next();
// });

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
