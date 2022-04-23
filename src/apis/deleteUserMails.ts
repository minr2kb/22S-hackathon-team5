import axios from "axios";



export const deleteUserMails = async (email: string, accessToken: string, mails: any[]) => {
    const d = await axios.post(`${process.env.REACT_APP_BACKEND}/gmail/mail-list/trash?access_token=${accessToken}`, {
        body: {
            mails
        }
    })
}