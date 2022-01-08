import { NextPage } from "next"
import { createRef, useEffect, useState } from "react";


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
            <Masonry className="grid grid-cols-2 gap-3">
                <MasonryCard />
                <div className="bg-yellow-200 w-32 h-32"></div>
                <MasonryCard />
                <MasonryCard />
                <MasonryCard />
            </Masonry>
        </Layout>
    )
}

export default Home