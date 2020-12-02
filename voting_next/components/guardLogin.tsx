/* 
    Login
    0 - only unlogged
    1 - need
    2 - don't nedd

*/

import { useEffect } from "react";

const Guard = async (e: number = 2) : Promise<boolean> => {
    return await new Promise((resolve) => {
        useEffect(function mount() {
            if (e == 1 && !window.localStorage.getItem("token")){
                window.location.href = "/login"
                resolve(false)
                return
            }
        
            if (e == 0 && window.localStorage.getItem("token")){
                window.location.href = "/home"
                resolve(false)
                return
            }
    
            resolve(true)
            return
        })
    })
}

export default Guard;