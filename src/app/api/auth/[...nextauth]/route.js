import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
    GitHubProvider({
    clientId: "Ov23li5zrNuK1TKAxe01",
    clientSecret: "214a533e76004945470669ef6317534ff39331ed",
    }),
    GoogleProvider({
    clientId: "287760263659-r3s5dht79lseb0s9g6rofogfg4pp40su.apps.googleusercontent.com",
    clientSecret: "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"
    })
    ],
    }
    const handler = NextAuth(authOptions)
    export { handler as GET, handler as POST }