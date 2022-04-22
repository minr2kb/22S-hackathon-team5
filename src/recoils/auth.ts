import { atom } from "recoil";

export const authTokenAtom = atom<string>({
	key: "authTokenAtom",
	default: (() => {
        return localStorage.getItem('access') ?? ''
    })(),
});
