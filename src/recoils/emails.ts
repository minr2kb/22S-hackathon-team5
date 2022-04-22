import { atom } from "recoil";

export const emailListAtom = atom<any>({
	key: "emailList",
	default: []
});

export const emailInfoAtom = atom<any>({
    key: "emailInfo",
    default: ''
})

export const profileInfoAtom = atom<any>({
    key: "profileInfo",
    default: ''
})