import { SignJWT } from "jose";

const generateToken = async (userData) => {
    const { email } = userData;
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_TOKEN)
    const alg = 'HS256'

    const jwt = await new SignJWT({ email })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret)
    return jwt;
};

export default generateToken;