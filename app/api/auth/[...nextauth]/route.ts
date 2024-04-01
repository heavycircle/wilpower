import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import clientPromise from "@/lib/mongodb"

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
      // get the permitted users from the database
      const client = await clientPromise
      const db = client.db("wilpower").collection("config")
      const users = await db.findOne({ name: "users" })

      // ensure the signed in user is inside the
      if (users) return users.users.includes(profile?.email)
      return false
    },
  },

  // debug: process.env.NODE_ENV === "development",
})

export { handler as GET, handler as POST }
