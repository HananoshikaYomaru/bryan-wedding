import Footer from "./Footer";
import Header from "./Header";

export type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="h-full bg-soapstone">
            <div className="flex flex-col items-center">
                <Header></Header>
                {children}
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Layout; 