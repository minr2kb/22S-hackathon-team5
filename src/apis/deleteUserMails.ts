import axios from "axios";

export const deleteUserMails = async (
    email: string,
    accessToken: string,
    mails: any[],
    directlyDelete: boolean
) => {
    const d = await axios.post(
        `${process.env.REACT_APP_BACKEND}/gmail/mail-list/${
            directlyDelete ? "delete" : "trash"
        }?access_token=${accessToken}&email=${email}`,
        {
            body: {
                mails,
            },
        }
    );
};
