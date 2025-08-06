import GlitchText from "./glitch-text";

export default function NotFound() {
    return (
        <section id="about" class="py-16 bg-black text-white">
            <div class="grid grid-cols-8 gap-8 mx-auto">
                <div className="flex flex-col space-y-8 col-span-3">
                    <GlitchText text={`404 page`} size={`text-8xl`}/>
                    <p class="text-lg">Page not found</p>
                </div>
                <div className="col-span-5"></div>
            </div>
        </section>
    )
}