"use client";

import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const login = getCookie("login");
    console.log('private AAAAAAAAAAAAAAAAAA2', login)
    if (login != '') {
      console.log('private AAAAAAAAAAAAAAAAAA1')
      setIsLoggedIn(true);
    } else {
      console.log('private AAAAAAAAAAAAAAAAAA')
      router.push("/login");

    }
  }, [router]);

  return isLoggedIn ? children : null;
};

export default PrivateRoute;
