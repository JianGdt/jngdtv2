import SocialMedia from "@/app/layouts/components/SocialMedia";

export default function Footer() {

    return (
        <footer className="container p-2">
            <div className="flex justify-between align-middle text-center items-center border-t">
                <h1 className="font-bold">@Jian Godito.</h1>
                <SocialMedia isShowDarkMode={false} />
            </div>
        </footer>
    )
}