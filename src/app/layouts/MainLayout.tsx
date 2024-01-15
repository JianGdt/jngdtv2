import NavItem from "@/app/layouts/NavItem";
import HeaderLayout from "@/app/layouts/HeaderLayout";
import SocialMedia from "./components/SocialMedia";


export default function MainLayout(
    props: {
        children: React.ReactNode
    }
) {
    return (
        <>
        <HeaderLayout>
        <NavItem/>
        <SocialMedia/>
        </HeaderLayout>
        {props.children}
        </>
    )
}