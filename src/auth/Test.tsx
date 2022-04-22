import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getUsersMail } from "../apis/getUsersMail";
import { authTokenAtom } from "../recoils/auth";
import { emailListAtom } from "../recoils/emails";

const Test = () => {
    const authToken = useRecoilValue(authTokenAtom);
    const [emailList, setEmailList] = useRecoilState<any>(emailListAtom);
    const handleClick = async () => {
        const d = await getUsersMail(authToken, "zerosheepmoo@gmail.com");
        setEmailList(d);
    };
    return <button onClick={handleClick}>Test</button>;
};

export default Test;
