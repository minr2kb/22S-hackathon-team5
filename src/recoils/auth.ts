import { atom } from "recoil";

export const authTokenAtom = atom<string>({
	key: "periodFilterRecoil",
	default: (() => {
        return localStorage.getItem('access') ?? ''
    })(),
});
