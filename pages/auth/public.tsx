"use client";

import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const PublicRoute = ({ children }: { children: ReactElement }) => {
  // const router = useRouter();

  // useEffect(() => {
  //   const login = getCookie("login");
  //   if (login) {
  //     router.push("/supports");
  //   }
  // }, [router]);

  // return getCookie("login") ? null : children;


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    var login = getCookie("login");
    console.log('public AAAAAAAAAAAAAAAAAA2', login, typeof (login))
      if (login != '') {
      console.log('public AAAAAAAAAAAAAAAAAA1')
      setIsLoggedIn(true);
      router.push("/supports");
    } else {
      console.log('public AAAAAAAAAAAAAAAAAA')
      setIsLoggedIn(false);
    }
  }, [router]);

  return isLoggedIn ? null : children;
};

export default PublicRoute;
