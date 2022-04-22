import axios from "axios";

/**
 * 전체메일을 불러올 때 쓰는 쿼리 오브젝트
 */
export interface GetUserMailsQuery {
    /**
     * 메일을 읽었는가?
     */
    checked: boolean;
    /**
     * 시작 날짜
     */
    from: string;
    /**
     * 끝 날짜
     */
    to: string;
}

export const getUserMail = async (accessToken: string, email: string, mailId: string) => {
    const d = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages/${mailId}?access_token=${accessToken}`)
    return d.data;
}
