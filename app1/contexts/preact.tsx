"use client";

import { useState, useEffect } from "react";
import { getCookie } from "cookies-next"; 

const useLoginState = () => {
    const [login, setLogin] = useState<any>(null);

    useEffect(() => {
        const cookieValue = getCookie("login");
        if (cookieValue) {
            setLogin(cookieValue);
        }
    }, []);

    return login;
};

const LoginComponent = () => {
    const login = useLoginState();

    return null;
};

export default LoginComponent;
