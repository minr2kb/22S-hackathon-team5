import axios from "axios"

export const getUserProfile = async (accessToken: string, userId: string) => {
    const d = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${userId}/profile?access_token=${accessToken}`)
    return d.data;
}
