import DarkModeToggle from "../components/DarkModeToggle";
import MenuItems from "./components/MenuItems";
export default function NavItem() {

return (
<nav>
    <ul className="flex gap-6 items-center ">
        <MenuItems/>
    </ul>
</nav>
    )
}