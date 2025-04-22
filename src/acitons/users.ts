"use server"

import { createClient } from "@/auth/sever"
import { handleError } from "@/lib/utils";

export const loginUserAction = async (email :string, password :string) =>{
    try {
        const {auth } = await createClient()
        const {error} = await auth.signInWithPassword ({
            email, 
            password
        });
        if (error) throw error ;
        return {errorMessage : null}; 

    } catch(error ){
        return handleError(error )
    }
// }

// function handleError(error: unknown) {
//     throw new Error("Function not implemented.")
}
