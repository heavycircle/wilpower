import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { siteConfig } from "@/config/site";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      authorization: {
        params: {
          scope: "read:user, read:org",
        },
      },
    }),
  ],

  callbacks: {
    // Add custom callbacks here
    async signIn({ user, account, profile, email, credentials }) {
      // get teams for user
      const teamsResponse = await fetch(
        `https://api.github.com/orgs/${siteConfig.github.org}/teams`,
        {
          headers: {
            Authorization: `token ${account?.access_token}`,
          },
        }
      );
      const teamsData = await teamsResponse.json();

      // check if user is in the team
      const isMember = teamsData.some(
        (team: { name: string }) => team.name === siteConfig.github.team
      );
      return isMember;
    },
  },

  // debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
