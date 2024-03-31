import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // Add custom callbacks here
    async signIn({ user, account, profile, email, credentials }) {
      // ensure the signed in user is inside the
      return true
    },
  },

  // debug: process.env.NODE_ENV === "development",
})

export { handler as GET, handler as POST }
