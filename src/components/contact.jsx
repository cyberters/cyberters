import GlitchText from "./glitch-text";
import ServiceItem from "./service-item";

export default function Contact() {
    return (
        <div class="grid grid-cols-8 gap-8 mx-auto w-full py-16" id="contact">
            <div className="flex flex-col space-y-10 col-span-3">
                <GlitchText text={`Contact us`} size={`text-4xl md:text-6xl lg:text-8xl`}/>
                <div className="flex flex-col space-y-6">
                    <h6 className="text-lg lg:text-2xl text-white">dominik hofman</h6>
                <a href="mailto:cyberters.ui@gmail.com" className="text-2xl lg:text-5xl text-white">cyberters.ui[at]gmail.com</a>
                </div>
            </div>
            <div className="col-span-5 flex">
            </div>
        </div>
    )
}