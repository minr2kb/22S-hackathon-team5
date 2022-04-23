import axios from "axios";


export const getUserMail = async (accessToken: string, email: string, mailId: string) => {
    const d = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages/${mailId}?access_token=${accessToken}`)
    return d.data;
}
