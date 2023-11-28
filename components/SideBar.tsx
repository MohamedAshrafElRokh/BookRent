"use client";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItems from "./SidebarItems";
import Library from "./Library";
interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathName = usePathname();
  const routes = [
    {
      icon: HiHome,
      label: "Home",
      active: pathName !== "/search",
      href: "/",
    },
    {
      icon: BiSearch,
      label: "Search",
      active: pathName === "/search",
      href: "/search",
    },
  ];
  return (
    <div className="flex h-full">
      <div
        className="
      hidden
      md:flex
      flex-col
      gap-y-2
      bg-black
      h-full
      w-[300px]
      p-2
      "
      >
        <Box>
          <div
            className="flex flex-col gap-y-4
          px-5
          py-4"
          >
            {routes.map((route) => (
              <SidebarItems key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>
      <div className="h-full w-full overflow-y-auto py-2 flex-1">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
