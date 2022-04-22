import axios from "axios";

/**
 * 전체메일을 불러올 때 쓰는 쿼리 오브젝트
 */
export interface UserMailsQuery {
    /**
     * 안읽은 것을 삭제할 거에 포함 여부
     */
    isUnread: boolean;

    /**
     * 시작 날짜
     */
    from: string;

    /**
     * 끝 날짜
     */
    to: string;

    /**
     * 첨부파일 있는 것을 삭제 할지의 여부
     */
    hasAttachment: boolean;

    /**
     * 제목에 포함하는 키워드
     */
    keyword: string

    /**
     * 프로모션을 삭제할지
     */
    deletePromotion: boolean;

    /**
     * 누가보냈는지
     */
    inSent: string[];

    /**
     * 휴지통으로 보내지 않고 바로 삭제할지 여부
     */
    directlyDelete: boolean;
}

const makeQuery = (userMailsQuery: UserMailsQuery, email: string) => {
    let inSent 
    return `?q=${123}&email=${email}`
}

export const deleteUserMails = async (userMailsQuery: UserMailsQuery) => {
    const d = await axios.delete(`백엔드에이피아이주소`)
    
}