import authUserModel from "@/services/model/authUserModel";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '599240118001-kulj4nr20rv4oiup9amaj650lcamt9na.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const { email } = profile;
        const findUser = await authUserModel.findOne({ email });

        if (!findUser) {
          const userData = {
            name: profile.name,
            email: profile.email,
            image: profile.picture
          };

          // Create a new user in the database
          const newUser = new authUserModel(userData);
          const savedUser = await newUser.save();
        }
      }
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
