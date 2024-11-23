import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import connectDb from "./lib/connectDb"
import { UserModel } from "./lib/Models/userModel";

async function handleLogin(obj){
  await connectDb();

  const user = await UserModel.findOne({email : obj.email});
  if (user){
    return user;
  }else{
    let NewUser = await UserModel(obj);
    NewUser = await NewUser.save();
    return NewUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
    let obj = {
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      picture:profile.picture
    };
    const user = await handleLogin(obj)
    return user // Do different verification for other providers that don't have `email_verified`
  }
    },
    callbacks: {
  async jwt({ token }) {
  const user = await handleLogin({email:token.email})
 console.log("Jwt =>>>>" , user);
 token.role = user.role;
 token.id = user._id;       
  return token;

      },
      session({ session, token }) {
        session.user.id = token.id
        session.user.role = token._role;
        return session;
      },
    },
  
  },
})
