import cover from "../public/images/cover.webp";
import Image from "next/image";
import Link from "next/link";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import { Menu } from "@headlessui/react";
import useMediaQuery from "../hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import styles from "./header.module.css";
import { useMain } from "../contexts/main";
import { useRouter } from "next/router";

const Header = () => {
  const { isMobile, routes } = useMain();
  const { i18n } = useTranslation("common");
  const router = useRouter();
  return (
    <div className="relative w-full h-20 z-[200]">
      <Image
        src={cover}
        layout="fill"
        objectFit="cover"
        className="pointer-events-none"
        draggable={false}
      ></Image>
      {!isMobile && (
        <div className="absolute flex flex-row space-x-16 center">
          {routes.map((r) => (
            <Link href={r.path} key={r.path}>
              <a className={styles["route"]}>{r.text}</a>
            </Link>
          ))}
        </div>
      )}
      {isMobile && (
        <div>
          <Menu
            as="div"
            className="absolute top-1/2 left-5 -translate-y-1/2  text-left shrink-0 overflow-visible "
          >
            <Menu.Button>
              <MenuAlt2Icon className="w-8 h-8 text-grain-brown "></MenuAlt2Icon>
            </Menu.Button>

            <Menu.Items className=" bg-soapstone absolute rounded-md flex flex-col py-3 px-5 space-y-2">
              {routes.map((r) => (
                <Menu.Item key={r.path}>
                  <Link href={r.path}>
                    <a className={styles["route2"]} onClick={() => close()}>
                      {r.text}
                    </a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      )}
      <Link href={router.pathname} locale={i18n.language == "en" ? "zh" : "en"}>
        <button className="font-wenyue text-grain-brown absolute top-1/2 right-0  transform -translate-y-1/2 mr-5 sm:mr-12">
          {i18n.language == "en" ? " 🇭🇰 中文" : " 🇬🇧 English"}
        </button>
      </Link>
    </div>
  );
};

export default Header;
