import { NextPage } from "next"
import Image from "next/image"
import Layout from "../../components/Layout";
import Memory , {Memory as MemoryType} from "../../components/Memory";
import { useLocale } from "../../lib/locale"
import Whole from "../../public/images/whole.svg"

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
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1333333_e_l5jrvt.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1333184_e_t8dpva.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1333397_e_urcd8d.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1322586_e_fybczl.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1322666_e_d8zq08.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532713/pre-wedding/Copy_of_P1333108_e_fhzfbu.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1322826_e_dcfv9g.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1333268_e_s6oym6.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532713/pre-wedding/Copy_of_P1333108_e_fhzfbu.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532713/pre-wedding/Copy_of_P1322806_e_kibgw7.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1322998_e_rfhqwp.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1333002_e_mnie72.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1322791_e_detzyc.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532711/pre-wedding/Copy_of_P1333421_e_kmlbau.webp" , 
                // "https://res.cloudinary.com/yomaru/image/upload/v1641532711/pre-wedding/Copy_of_P1322540_e_hfwmub.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1641532709/pre-wedding/Copy_of_P1322763_e_khazkd.webp" , 
            ], s[1].memories)
        }, {
            title: s[2].title , 
            memories : linksToMemories([
                "https://res.cloudinary.com/yomaru/image/upload/v1642849783/bryan/betrothal/F17641A9-51B2-424B-929D-DBE385D6A552_ydnnrg.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849784/bryan/betrothal/1C5190DD-E951-4ADF-90D7-1DA2A1797044_bomvtv.webp", 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849783/bryan/betrothal/097F1D3E-AE57-4483-A62A-54312536CD4F_bafk0w.webp", 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849781/bryan/betrothal/8463E0F4-78E2-4A7F-8F2F-3D0F6030B8F3_tl80pq.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849783/bryan/betrothal/212EF08D-A4C1-4B03-9154-65A7877A806C_lyptii.webp" ,
                "https://res.cloudinary.com/yomaru/image/upload/v1642849783/bryan/betrothal/2E4F4CA1-FBFD-4FE7-9785-C58B12D4ECC7_ubhwzs.webp" ,  
                "https://res.cloudinary.com/yomaru/image/upload/v1642849782/bryan/betrothal/C6257662-6BDB-4AF1-81AE-4626752BFD6A_uoem7h.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849782/bryan/betrothal/7C2FD49D-C30A-4DDC-9787-B37778A55D33_vxq5zv.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849782/bryan/betrothal/FF696BC9-4644-4DE4-BA57-193A7522A002_wmgqku.webp" ,
            ], s[2].memories) , 
        }, {
            title: s[3].title , 
            memories : linksToMemories([
                "https://res.cloudinary.com/yomaru/image/upload/v1642849785/bryan/date/IMG_1029_utzs2l.webp",  
                "https://res.cloudinary.com/yomaru/image/upload/v1642849787/bryan/date/1632284978495_b1gu1x.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849787/bryan/date/1632281170392_vq5s2q.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849787/bryan/date/8C6A6913-1376-4EEC-9D40-CB875B757527_hvrop4.webp" ,
                "https://res.cloudinary.com/yomaru/image/upload/v1642849785/bryan/date/IMG_6780_chfx6l.webp"  , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849785/bryan/date/IMG-20210417-WA0016_xfc9fg.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849784/bryan/date/IMG_20210918_182700_zp9irq.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849784/bryan/date/IMG_0611_qiuos2.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849784/bryan/date/1632281170466_eaxqpf.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849784/bryan/date/677713C0-7F62-4399-80F2-C309567498D5_dtvzjl.webp",  
                "https://res.cloudinary.com/yomaru/image/upload/v1642849784/bryan/date/IMG_5198_tqsr2r.webp" ,
            ], s[3].memories) , 
        }, {
            title: s[4].title , 
            memories : linksToMemories([
                "https://res.cloudinary.com/yomaru/image/upload/v1642849790/bryan/graduation/1636353681110_ubqixx.webp"  ,
                "https://res.cloudinary.com/yomaru/image/upload/v1642849788/bryan/graduation/1641794279221_ime0lm.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849788/bryan/graduation/1641794085214_vuavjb.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849787/bryan/graduation/1636353680508_exdnrv.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849787/bryan/graduation/1641796042068_uj8ji1.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849787/bryan/graduation/1636353680752_bj8x7a.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849786/bryan/graduation/1636353679194_ivxr0p.webp" , 
            ], s[4].memories) , 
        }, {
            title: s[5].title , 
            memories : linksToMemories([
                "https://res.cloudinary.com/yomaru/image/upload/v1642849781/bryan/our%20friends/1632279849673_fiydwj.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849781/bryan/our%20friends/1632281169443_plug1t.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849781/bryan/our%20friends/1632282537855_huqqr6.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849781/bryan/our%20friends/1632281170750_tr3wmy.webp",  
                "https://res.cloudinary.com/yomaru/image/upload/v1642849780/bryan/our%20friends/1632283897114_wmws4w.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849780/bryan/our%20friends/1636353494627_mxpmuh.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849780/bryan/our%20friends/1632281170447_ossasj.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849779/bryan/our%20friends/IMG_9807_ilzstm.webp", 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849779/bryan/our%20friends/1641796168964_vnuxmz.webp" , 
                "https://res.cloudinary.com/yomaru/image/upload/v1642849779/bryan/our%20friends/IMG_0399_qolxbw.webp"
            ], s[5].memories) , 
        }
    ]

    return (
        <Layout>
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


            <div className="flex flex-col w-full items-center relative">
                {/* background  */}
                <div className="absolute w-full right-0 top-0 sm:w-[60%] sm:left-1/4 sm:top-0 opacity-50 pointer-events-none">
          <Image src={Whole} layout="responsive" className="" />
        </div>
                {
                    sections.map(s => {
                        return (
                            <Memory key={s.title} title={s.title} memories={s.memories} />
                        )
                    })
                }
            </div>
            <div className="h-32"></div>


        </Layout>
    )
}
export default Home 