import { connectDB } from '@/lib/mongoDb';
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import Client from '@/models/Client';


const AuthOption = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectDB();
                    const user = await Client.findOne({ email });
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if(!passwordMatch){
                        return null
                    }
                    return user
                } catch (error) {
                    console.log("Invalid user", error)
                }
            }

        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_URL,
    pages: {
        signIn: "/"
    }
}

const handler = NextAuth(AuthOption);


export {handler as GET, handler as POST};