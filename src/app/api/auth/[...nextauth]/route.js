import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
            email: {
            label: "email:",
            type: "text",
            },
            password: {
            label: "password:",
            type: "password",
            },
            },
            async authorize(credentials) {
            try {
            const res = await fetch("http://localhost:3001/api/users/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
            }),
            });
            const response = await res.json();
            console.log(response)
            if (response.success===false) {
            throw new Error("Invalid credentials");
            }
            if (response.user) { console.log(response.user)
            return { ...response.user, password: null, role:
            response.user.role , image: response.user.avatar};
            } else {
            return null;
        }
    } catch (error) {
    console.log(error);
    }
    return null;
    },
    }),
    GitHubProvider({
    clientId: "Ov23li5zrNuK1TKAxe01",
    clientSecret: "214a533e76004945470669ef6317534ff39331ed",
    }),
    GoogleProvider({
    clientId: "287760263659-r3s5dht79lseb0s9g6rofogfg4pp40su.apps.googleusercontent.com",
    clientSecret: "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"
    })
    ],
    secret: process.env.SECRET,
callbacks: {
async jwt({ token, user }) {
if (user){
token.role = user.role;
token.image = user.image;
}
return token;
},
async session({ session, token }) {
if (session?.user) {
session.user.role = token.role;
session.user.image = token.image;
}
return session;
},
},
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }