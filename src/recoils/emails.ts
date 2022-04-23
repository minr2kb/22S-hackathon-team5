import { atom } from "recoil";

export const emailListAtom = atom<any>({
    key: "emailList",
    default: [
        {
            id: "1805528a233f318e",
            from: "Slack <notification@slack.com>",
            subject:
                "[Slack] Spring 2022 Hackathon의 다음 작성자가 보낸 메시지가 있습니다. Young Won Choi 님과 Hawon Park 님",
            date: "Sat, 23 Apr 2022 06:42:47 +0000",
            sizeEstimate: 32285,
            labelIds: ["UNREAD", "IMPORTANT", "CATEGORY_UPDATES", "INBOX"],
        },
        {
            id: "18055226ed8db6dd",
            from: "Quora Digest <english-personalized-digest@quora.com>",
            subject:
                "As a computer programmer, who is the most disturbing individual you've ever met?",
            date: "Sat, 23 Apr 2022 06:36:00 +0000",
            sizeEstimate: 100850,
            labelIds: ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
        },
        {
            id: "18054fad45936480",
            date: "Sat, 23 Apr 2022 05:52:45 GMT",
            subject: "보안 알림",
            from: "Google <no-reply@accounts.google.com>",
            sizeEstimate: 12569,
            labelIds: ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
        },
    ],
});

export const selectionModelAtom = atom<any>({
    key: "selectionModel",
    default: [],
});

export const emailInfoAtom = atom<any>({
    key: "emailInfo",
    default: (() => {
        return localStorage.getItem("email") ?? "";
    })(),
});

export const profileInfoAtom = atom<any>({
    key: "profileInfo",
    default: (() => {
        return {
            displayName: localStorage.getItem("name") ?? "",
            photo: localStorage.getItem("photo") ?? "",
        };
    })(),
});
