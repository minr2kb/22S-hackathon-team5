import { atom } from "recoil";

interface Email {
    title: string;
    sender: string;
    date: string;
}

export const periodFilterRecoilAtom = atom<{
    start: string | null;
    end: string | null;
}>({
    key: "periodFilterRecoilAtom",
    default: { start: null, end: null },
});

export const senderFilterRecoilAtom = atom<string[]>({
    key: "senderFilterRecoilAtom",
    default: [],
});

export const keywordFilterRecoilAtom = atom<string[]>({
    key: "keywordFilterRecoilAtom",
    default: [],
});

export const filteredEmailsRecoilAtom = atom<Email[]>({
    key: "filteredEmailsRecoilAtom",
    default: [],
});
