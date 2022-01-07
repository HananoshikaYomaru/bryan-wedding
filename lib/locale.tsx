import { createContext, useContext, useEffect , useState } from "react";
import { useRouter } from "next/router"
import {Data, L }from "../constants/localization"
import Layout from "../components/Layout";
import LoadingRing from "../public/images/loading.gif"
import Image from "next/image"


type LocaleContextProps = {
    getLocale: () => "en" | "zh-hk",
    changeLocale : (target : string ) => void , 
    L : () => Data, 
}

const LocaleContext = createContext({} as LocaleContextProps);
export const useLocale = () => useContext(LocaleContext);

type LocaleProviderProps = {
    children: React.ReactNode
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
    const router = useRouter()
    const [isReady , setIsReady ] = useState (false ) 
    useEffect( () => { 
        if (router.isReady) { 
            setIsReady (true) ;  
        } 
    }, [router.isReady])
    const getLocale = () => {
        // console.log(router.query.locale as string )
        return router.query.locale as "en" | "zh-hk" 
        // if (router.asPath.split("/").includes("en"))
        //     return "en"
        // else if (router.asPath.split("/").includes("zh-hk"))
        //     return "zh-hk"
        // else
        //     return "en"
    } 

    if (!isReady ) { 
        return <div className="w-full h-screen bg-beige flex items-center justify-center">
           <Image src={LoadingRing} />
        </div> 
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