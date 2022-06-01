import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import Memory, { Memory as MemoryType } from "../components/Memory";
import Whole from "../public/images/whole.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../i18next.config";
import { useTranslation } from "next-i18next";
import Modal from "../components/Modal";
import { Fragment, useState } from "react";
import Thumbnail from "../components/Thumbnail";

const linksToImages = (links: string[]): MemoryType[] => {
  return links.map((l, index) => {
    const tokens = l.split("upload/");
    const image = tokens[0] + "upload/h_1080,c_scale/" + tokens[1];
    const thumbnail = tokens[0] + "upload/h_360,c_scale/" + tokens[1];
    return {
      image: image,
      thumbnail: thumbnail,
    };
  });
};

const Home: NextPage = () => {
  const { t } = useTranslation("gallery");
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState<{
    image: string;
    title?: string;
    description?: string;
  }>();
  const proposal_images = linksToImages([
    "https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF2296_teuzyf.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641543288/propose/DSCF1933_xizgvk.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF2279_xctowx.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF2278_iqufzg.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532717/propose/DSCF1937_oivoqz.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532716/propose/DSCF2071_ldb9wq.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532716/propose/DSCF2148_djurca.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532717/propose/DSCF2292_crvht2.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532717/propose/DSCF2024_s57xqj.webp",
  ]);

  const prewedding_images = linksToImages([
    "https://res.cloudinary.com/yomaru/image/upload/v1641534360/pre-wedding/Copy_of_P1322774_e_pl6t6s.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532720/pre-wedding/Copy_of_P1333445_e_wzhmov.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532720/pre-wedding/Copy_of_P1333438_e_nfl4qz.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532715/pre-wedding/Copy_of_P1333397_e_urcd8d.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1322826_e_dcfv9g.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532714/pre-wedding/Copy_of_P1333268_e_s6oym6.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1322998_e_rfhqwp.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532712/pre-wedding/Copy_of_P1333002_e_mnie72.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641532709/pre-wedding/Copy_of_P1322763_e_khazkd.webp",
  ]);

  const betrothal_images = linksToImages([
    "https://res.cloudinary.com/yomaru/image/upload/v1653920609/betrothal/F17641A9-51B2-424B-929D-DBE385D6A552_xhjpxn.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920607/betrothal/1C5190DD-E951-4ADF-90D7-1DA2A1797044_ie0jhp.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920607/betrothal/097F1D3E-AE57-4483-A62A-54312536CD4F_tba9va.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920608/betrothal/8463E0F4-78E2-4A7F-8F2F-3D0F6030B8F3_tvfi70.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920607/betrothal/212EF08D-A4C1-4B03-9154-65A7877A806C_vzpm1k.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920607/betrothal/C6257662-6BDB-4AF1-81AE-4626752BFD6A_qlki9w.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920608/betrothal/7C2FD49D-C30A-4DDC-9787-B37778A55D33_jf99yp.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920607/betrothal/2E4F4CA1-FBFD-4FE7-9785-C58B12D4ECC7_o2zhzn.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653920608/betrothal/FF696BC9-4644-4DE4-BA57-193A7522A002_pt1dbg.webp",
  ]);

  const date_images = linksToImages([
    "https://res.cloudinary.com/yomaru/image/upload/v1653921105/date/IMG_1029_otr1el.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921105/date/1632284978495_eaptqm.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921104/date/IMG_6780_kup1gl.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921104/date/IMG-20210417-WA0016_bduvvs.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921106/date/IMG_20210918_182700_ugbps8.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921105/date/IMG_0611_twahcg.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921105/date/1632281170466_phncbf.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921104/date/677713C0-7F62-4399-80F2-C309567498D5_bstiwv.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921106/date/IMG_5198_ktkknr.webp",
  ]);

  const graduation_images = linksToImages([
    "https://res.cloudinary.com/yomaru/image/upload/v1653921683/graduation/1636353681110_idfyo5.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921681/graduation/1641794279221_hvwip1.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921682/graduation/1641794085214_shxfxc.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921687/graduation/1636353680508_qe01ik.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921682/graduation/1641796042068_phyzcy.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921682/graduation/1636353680752_q47f1m.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921682/graduation/1636353679194_wbpujt.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921682/graduation/1636353681016_f3o111.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653921683/graduation/1646461899470_zz1vs2.webp",
  ]);

  const friends_images = linksToImages([
    "https://res.cloudinary.com/yomaru/image/upload/v1653922027/friends/1632279849673_vllmwm.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922027/friends/1632281169443_kktz4b.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922027/friends/1632282537855_j4mdrv.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922027/friends/1632281170750_pakncw.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922027/friends/1636353494627_cooddi.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922027/friends/1632281170447_zvfvgh.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922028/friends/IMG_9807_pxyd1c.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922028/friends/1641796168964_fhnnlj.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1653922028/friends/IMG_0399_hxoogi.webp",
  ]);

  const sectionTitles = [
    "proposal",
    "prewedding",
    "betrothal",
    "date",
    "graduation",
    "friends",
  ];

  const sectionImages = [
    proposal_images,
    prewedding_images,
    betrothal_images,
    date_images,
    graduation_images,
    friends_images,
  ];

  return (
    <Layout>
      {/* banner */}
      <div className="w-full">
        <div className="h-72 lg:h-144 relative w-full ">
          <div className="absolute h-full bg-blue-200 w-full"></div>
          <Image
            src="https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641543288/propose/DSCF1933_xizgvk.webp"
            layout="fill"
            objectFit="cover"
            className=" opacity-50"
          />
          <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
            <p className="font-serif font-bold text-2xl sm:text-6xl  text-pickled-bluewood">
              {t("gallery")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-20 w-3/4 lg:w-1/2 relative">
        {/* background  */}
        <div className="absolute w-full right-0 top-0 sm:w-[60%] sm:left-1/4 sm:top-0 opacity-50 pointer-events-none">
          <Image src={Whole} layout="responsive" className="" />
        </div>

        {/* sections  */}
        <div className="flex flex-col items-center">
          {sectionTitles.map((title, index) => {
            return (
              <Fragment key={title}>
                <p>{t(title)}</p>
                <div className="w-full grid grid-cols-3 gap-8 mb-20">
                  {sectionImages[index].map((image, index) => (
                    <Thumbnail
                      key={image.thumbnail}
                      image={image.thumbnail}
                      onClick={() => {
                        setTarget({
                          image: image.image,
                          description: [
                            "proposal",
                            "prewedding",
                            "date",
                            "friends",
                          ].includes(title)
                            ? t(`${title}_des_${index + 1}`)
                            : undefined,
                        });
                        setIsOpen(true);
                      }}
                    ></Thumbnail>
                  ))}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        target={target}
        onClose={() => {
          setTarget(undefined);
        }}
      ></Modal>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "gallery"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}
export default Home;
