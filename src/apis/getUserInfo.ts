import axios from "axios"

export const getUserInfo = async (accessToken: string) => {
    const d = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`)
    return d.data;
}
