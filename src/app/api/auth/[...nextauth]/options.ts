import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import  CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" , placeholder: "your username"},
                password: { label: "Password", type: "password", placeholder: "your password"},
            }, async authorize(credentials) {
                const user = {id: "10", name: "phdbui", password: "123"};
                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                }
                return null;
            },
        })
    ]
}