import NavItem from "@/app/layouts/NavItem";
import HeaderLayout from "@/app/layouts/HeaderLayout";
import SocialMedia from "./components/SocialMedia";
import MyName from "./components/MyName";
import AppContainer from "./components/AppContainer";


export default function MainLayout(
    props: {
        children: React.ReactNode
    }
) {
    return (
        <>
				<AppContainer>
        <HeaderLayout>
        <MyName myName="JnGdt"/>
        <NavItem/>
        <SocialMedia/>
        </HeaderLayout>
				</AppContainer>
        {props.children}
        </>
    )
}