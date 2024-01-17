// 'use client'
// import React, { useState, useEffect } from 'react';
import NavItem from "@/app/layouts/NavItem";
import HeaderLayout from "@/app/layouts/HeaderLayout";
import SocialMedia from "@/app/layouts/components/SocialMedia";
import MyName from "@/app/layouts/components/MyName";
import AppContainer from "@/app/layouts/components/AppContainer";
import Footer from "@/app/layouts/components/Footer";
// import Loading from '@/app/components/Loading';

export default function MainLayout(props: { children: React.ReactNode }) {
  // const [isLoading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000);
  // }, []); 

  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
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
      {/* )} */}
    </>
  );
}
