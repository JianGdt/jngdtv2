import DarkModeToggle from "../components/DarkModeToggle";
import Hero from "../views/heroPage/Hero";
import MenuItems from "./components/MenuItems";

export default function NavItem() {

return (
<nav>
    <ul className="flex gap-6">
        <Hero/>
        <MenuItems/>
        <DarkModeToggle/>
    </ul>
</nav>
    )
}