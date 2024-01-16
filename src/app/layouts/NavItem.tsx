import { navItems } from "@/app/constant/navItems";
import MenuItems from "@/app/layouts/components/MenuItems";
export default function NavItem() {

return (
<nav>
    <ul className="flex gap-2 md:gap-6 items-center ">
        {navItems.map((item, index) => (
            <MenuItems key={index} name={item.name} path={item.path} />
        ))}
    </ul>
</nav>
    )
}