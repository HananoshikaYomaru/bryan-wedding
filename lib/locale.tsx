import { createContext, useContext } from "react";
import { useRouter } from "next/router"
import {L }from "../constants/localization"


type LocaleContextProps = {
    getLocale: () => string,
    changeLocale : (target : string ) => void , 
    L : () => {} 
}

const LocaleContext = createContext({} as LocaleContextProps);
export const useLocale = () => useContext(LocaleContext);

type LocaleProviderProps = {
    children: React.ReactNode
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
    const router = useRouter()
    const getLocale = () => {
        // console.log(router.query.locale as string )
        return router.query.locale as string 
        // if (router.asPath.split("/").includes("en"))
        //     return "en"
        // else if (router.asPath.split("/").includes("zh-hk"))
        //     return "zh-hk"
        // else
        //     return "en"
    } 
    return <LocaleContext.Provider value={{
        getLocale: getLocale, 
        changeLocale : (target : string ) => { 
            router.push(router.asPath.replace(getLocale(), target))
        }, 
        L : () => {
            let locale : string  = getLocale()
            return L[locale]
        } 
    }}>
        {children}
    </LocaleContext.Provider>
}