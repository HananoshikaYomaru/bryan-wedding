import { NextPage } from "next"
import Image from "next/image"
import Memory , {Memory as MemoryType} from "../../components/Memory";
import { useLocale } from "../../lib/locale"

const linksToMemories = (links: string[], memories: { description?: string, title?: string }[]): (MemoryType[]) => {

    return links.map((l, index) => {
        const tokens = l.split("upload/")
        const image = tokens[0] + "upload/h_1080,c_scale/" + tokens[1]
        const thumbnail = tokens[0] + "upload/h_240,c_scale/" + tokens[1]
        return {
            image: image,
            thumbnail: thumbnail,
            ...memories[index]
        }
    })
}

const Home: NextPage = () => {
    const { getLocale, L } = useLocale();
    const s = L().gallery.sections
    const sections = [
        {
            title: s[0].title,
            memories: linksToMemories( [
                "https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF2296_teuzyf.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641543288/propose/DSCF1933_xizgvk.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF2279_xctowx.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF2278_iqufzg.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532717/propose/DSCF1937_oivoqz.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532716/propose/DSCF2071_ldb9wq.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532716/propose/DSCF2148_djurca.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532717/propose/DSCF2292_crvht2.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532717/propose/DSCF2024_s57xqj.webp" , 
            ], s[0].memories)
        },
        {
            title: s[1].title,
            memories: linksToMemories( [
                "https://res.cloudinary.com/yomaru/image/upload/v1641534360/pre-wedding/Copy_of_P1322774_e_pl6t6s.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532720/pre-wedding/Copy_of_P1333445_e_wzhmov.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532720/pre-wedding/Copy_of_P1333438_e_nfl4qz.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1333333_e_l5jrvt.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1333184_e_t8dpva.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1333397_e_urcd8d.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1322586_e_fybczl.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1322666_e_d8zq08.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532713/pre-wedding/Copy_of_P1333108_e_fhzfbu.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1322826_e_dcfv9g.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1333268_e_s6oym6.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532713/pre-wedding/Copy_of_P1333108_e_fhzfbu.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532713/pre-wedding/Copy_of_P1322806_e_kibgw7.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1322998_e_rfhqwp.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1333002_e_mnie72.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1322791_e_detzyc.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532711/pre-wedding/Copy_of_P1333421_e_kmlbau.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532711/pre-wedding/Copy_of_P1322540_e_hfwmub.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532709/pre-wedding/Copy_of_P1322763_e_khazkd.webp" , 
            ], s[1].memories)
        }
    ]

    return (
        <>
            {/* banner */}
            <div className="w-full">
                <div className="h-72 lg:h-144 relative w-full ">
                    <div className="absolute h-full bg-blue-200 w-full"></div>
                    <Image src="https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641543288/propose/DSCF1933_xizgvk.webp" layout="fill" objectFit='cover' className=" opacity-50" />
                    <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
                        <p className="font-serif font-bold text-2xl sm:text-6xl  text-pickled-bluewood">{L().gallery.gallery}</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col w-full items-center">
                {
                    sections.map(s => {
                        return (
                            <Memory key={s.title} title={s.title} memories={s.memories} />
                        )
                    })
                }
            </div>

            <div className="h-32"></div>


        </>
    )
}
export default Home 