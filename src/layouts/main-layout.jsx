import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default function MainLayout({children}) {
    return (
        <div className="bg-black px-5 py-3 lg:px-8 lg:py-5 xl:px-20 xl:py-16 space-y-24">
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}