// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

import Link from "next/link";

import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className={
        "flex flex-col items-center xl:justify-center fixed w-full xl:w-16 xl:max-w-md h-max xl:h-screen z-50 gap-y-4 top-0 bottom-0 xl:right-[2%] mt-auto"
      }
    >
      {/*inner*/}
      <div
        className={
          "flex w-full xl:flex-col items-center justify-between xl:justify-center bg-white/10 backdrop-blur-sm gap-y-14 px-8 md:px-20 xl:px-0 py-8 h-[80px] xl:h-max text-3xl xl:text-2xl xl:rounded-full"
        }
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/*tooltip*/}
              <div
                className={"absolute pr-14 right-0 hidden xl:group-hover:flex"}
              >
                <div
                  className={
                    "relative flex bg-white text-primary items-center p-[6px] rounded-[3px]"
                  }
                >
                  <div
                    className={
                      "text-[12px] leading-none font-semibold capitalize"
                    }
                  >
                    {link.name}
                  </div>
                  {/*triangle*/}
                  <div
                    className={
                      "absolute -right-2 border-solid border-l-white border-l-8 border-r-0 border-y-transparent border-y-[6px]"
                    }
                  ></div>
                </div>
              </div>
              {/*icon*/}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
