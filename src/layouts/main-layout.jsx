import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default function MainLayout({children}) {
    return (
        <div className="bg-black px-20 py-16 space-y-24">
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}