import GlitchText from "./glitch-text";
import ServiceItem from "./service-item";

export default function Contact() {
    return (
        <div class="grid grid-cols-8 gap-8 mx-auto w-full py-16" id="contact">
            <div className="flex flex-col space-y-10 col-span-3">
                <GlitchText text={`Contact us`} size={`text-8xl`}/>
                <a href="mailto:cyberters.ui@gmail.com" className="text-5xl text-white">cyberters.ui[at]gmail.com</a>
            </div>
            <div className="col-span-5 flex">
            </div>
        </div>
    )
}