import prisma from '../lib/prismadb'

import getSession from './getSession';

const getCurrentUser = async () => {
    const session = await getSession();
    try {
        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })
        if(!currentUser){
            return null
        }
    } catch (error) {
        
    }
}
export default getCurrentUser