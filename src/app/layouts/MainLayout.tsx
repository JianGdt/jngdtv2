import NavItem from "@/app/layouts/NavItem";
import HeaderLayout from "@/app/layouts/HeaderLayout";
import SocialMedia from "./components/SocialMedia";
import MyName from "./components/MyName";


export default function MainLayout(
    props: {
        children: React.ReactNode
    }
) {
    return (
        <>
        <HeaderLayout>
        <MyName myName="JnGdt"/>
        <NavItem/>
        <SocialMedia/>
        </HeaderLayout>
        {props.children}
        </>
    )
}