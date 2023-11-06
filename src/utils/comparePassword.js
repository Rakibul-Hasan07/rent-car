import bcrypt from 'bcryptjs';

const comparePassword = async (password, hash) => {
    const compareValue = await bcrypt.compare(password, hash);
    return compareValue;
};

export default comparePassword;