import { useTranslation } from "next-i18next";
import React, { useContext, useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

interface MainProviderProps {
  children: JSX.Element;
}

type MainContextState = {
  routes: { path: string; text: string }[];
  isMobile: boolean;
};

const MainContext = React.createContext({} as MainContextState);

/**
 * This provides all the data to every pages.
 * @remarks Top level context, can be accessed anywhere in the app
 */
export const useMain = () => useContext(MainContext);

export const MainProvider = ({ children }: MainProviderProps) => {
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width: 1224px)");
  const routes: { path: string; text: string }[] = [
    {
      path: "/",
      text: t("home"),
    },
    {
      path: "/info",
      text: t("information"),
    },
    {
      path: "/events",
      text: t("events"),
    },
    {
      path: "/story",
      text: t("story"),
    },
    {
      path: "/friends",
      text: t("friends"),
    },
    {
      path: "/gallery",
      text: t("gallery"),
    },
  ];

  return (
    <MainContext.Provider
      value={{
        routes,
        isMobile,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
