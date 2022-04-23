import { atom } from "recoil";

export const emailListAtom = atom<any>({
	key: "emailList",
	default: []
});

export const emailInfoAtom = atom<any>({
    key: "emailInfo",
    default: (()=> {return localStorage.getItem('email') ?? ''})()
})

export const profileInfoAtom = atom<any>({
    key: "profileInfo",
    default: (()=> {
        return {
            displayName: localStorage.getItem('name') ?? '',
            photo: localStorage.getItem('photo') ?? ''
        }
    })()
})