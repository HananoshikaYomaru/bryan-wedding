import { NextPage } from "next"
import { createRef, useEffect, useState } from "react";
import Image from "next/image"


import Layout from "../../components/Layout";

const MasonryCard = () => {
    const [span, setSpan] = useState(0)
    const ref = createRef<HTMLDivElement>()
    useEffect(() => {

    }, [])
    return <div ref={ref} className="w-32 h-64 bg-red-200 "></div>
}

const Masonry = ({ children, className }: any) => {
    return <div className={className}>
        {children}
    </div>
}

const Home: NextPage = () => {
    useEffect(() => {
        function handleResize() {
            console.log('Do resize stuff') 
        }
        console.log("listen...")
        window.addEventListener('resize', handleResize)

        return function cleanupListener() {
            console.log("clean up...")
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <Layout>
            {/* <Masonry className="grid grid-cols-2 gap-3">
                <MasonryCard />
                <div className="bg-yellow-200 w-32 h-32"></div>
                <MasonryCard />
                <MasonryCard />
                <MasonryCard />
            </Masonry> */}
            <div className="p-5 bg-white  h-200">
            <div className="relative w-86 h-fit">
                <img src="https://res.cloudinary.com/yomaru/image/upload/v1642849779/bryan/our%20friends/IMG_9807_ilzstm.webp" className="w-[50%]" alt="" />
            </div>
            </div>
        </Layout>
    )
}

export default Home