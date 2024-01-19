'use client'
import NavItem from "@/app/layouts/NavItem";
import HeaderLayout from "@/app/layouts/HeaderLayout";
import SocialMedia from "@/app/layouts/components/SocialMedia";
import MyName from "@/app/layouts/components/MyName";
import AppContainer from "@/app/layouts/components/AppContainer";
import Footer from "@/app/layouts/components/Footer";
import { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";

export default function MainLayout(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer); 
  }, []);


  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <AppContainer>
          <HeaderLayout>
            <MyName myName="JnGdt" />
            <NavItem />
            <SocialMedia />
          </HeaderLayout>
        </AppContainer>
        {props.children}
        <Footer />
      </>
    )}
  </>
  );
}
