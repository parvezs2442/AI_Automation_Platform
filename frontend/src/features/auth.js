import api from "../api"

//login api
export const login = async(token) => {
    try{
        const { data } = await api.post("/api/auth/login", {token})
        return data;
    }catch(error){
        console.log(error)
    }
}

//logout
export const logout = async() => {
    try{
        const { data } = await api.get("/api/auth/logout")
        console.log(data)
        return data;
    }catch(error){
        console.log(error)
    }
}


//me
export const me = async() => {
    try{
        const { data } = await api.get("/api/auth/me")
        console.log(data)
        return data;
    }catch(error){
        console.log(error)
    }
}