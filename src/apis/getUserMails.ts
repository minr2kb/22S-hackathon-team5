import axios from "axios";


export const getUserMails = async (accessToken: string, email: string) => {
    const d = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages?access_token=${accessToken}`)
    return d.data;
}
