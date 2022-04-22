import { atom } from "recoil";

export const periodFilterRecoil = atom<string>({
	key: "periodFilterRecoil",
	default: "",
});

export const senderFilterRecoil = atom<string[]>({
	key: "senderFilterRecoil",
	default: [],
});

export const keywordFilterRecoil = atom<string[]>({
	key: "keywordFilterRecoil",
	default: [],
});
