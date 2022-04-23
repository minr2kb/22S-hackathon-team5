import axios from "axios";


/**
 * 전체메일을 불러올 때 쓰는 쿼리 오브젝트
 */
 export interface UserMailsQuery {
    /**
     * 안읽은 것을 삭제할 거에 포함 여부
     */
    isUnread?: boolean;

    /**
     * 시작 날짜
     */
    from?: string;

    /**
     * 끝 날짜
     */
    to?: string;

    /**
     * 첨부파일 있는 것을 삭제 할지의 여부
     */
    hasAttachment?: boolean;

    /**
     * 제목에 포함하는 키워드
     */
    keywords?: string[]

    /**
     * 프로모션을 삭제할지
     */
    deletePromotion?: boolean;

    /**
     * 누가보냈는지
     */
    inSent?: string[];

    /**
     * 휴지통으로 보내지 않고 바로 삭제할지 여부
     */
    directlyDelete?: boolean;
}

const makeQuery = (userMailsQuery: UserMailsQuery, email: string, accessToken: string) => {
    let inSent 
    return `?q=subject:suny OR subject:korea&email=${email}&access_token=${accessToken}`
}

export const getUserMails = async (userMailsQuery: UserMailsQuery, email: string, accessToken: string) => {
    const d = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages${makeQuery(userMailsQuery, email, accessToken)}`)
    return d.data;
}

