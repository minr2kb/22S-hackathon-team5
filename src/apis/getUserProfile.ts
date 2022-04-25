import axios from "axios"

export const getUserProfile = async (accessToken: string) => {
    const d = await axios.get(`${process.env.REACT_APP_BACKEND}/gmail/user-profile?access_token=${accessToken}`)
    return d.data;
}
