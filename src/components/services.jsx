import { useState } from "react";
import GlitchText from "./glitch-text";
import ServiceItem from "./service-item";
import image from '../assets/jpg/filejpg.jpg';
import image02 from '../assets/jpg/classic001.jpg';
import image03 from '../assets/jpg/classic03.jpg';

export default function Services() {
    const [selectedService, setSelectedService] = useState("");

    const services = [
        { 
            title: "UX Design", 
            xOffset: "translate-x-0", 
            desc: "We design user experiences based on research, usability principles, and data-driven insights to ensure intuitive, efficient, and enjoyable interactions across devices." 
        },
        { 
            title: "UI Design", 
            xOffset: "translate-x-80", 
            desc: "We create modern, responsive, and accessible interfaces that enhance user engagement and align with brand identity, ensuring seamless interaction on any platform." 
        },
        { 
            title: "Web Development", 
            xOffset: "translate-x-60", 
            desc: "We build scalable, high-performance websites and applications using modern tech stacks: JavaScript (React, Node.js), Python, PHP, SQL, and WordPress." 
        },
        { 
            title: "Logo Design", 
            xOffset: "translate-x-10", 
            desc: "We craft distinctive, versatile logos with a strong visual identity, optimized for digital and print, ensuring lasting brand recognition." 
        },
        { 
            title: "Intelligent Digital Products", 
            xOffset: "translate-x-48", 
            desc: "We develop AI-powered solutions, smart applications, and automation tools that streamline workflows, enhance decision-making, and drive innovation." 
        }
    ];

    const selectedServiceObject = services.find(service => service.title === selectedService);

    return (
        <div className="grid grid-cols-8 gap-8 mx-auto w-full py-16">
            <div className="flex flex-col space-y-10 col-span-3">
                <GlitchText text={`we're thinkin' 'bout TECH...`} size={`text-8xl`} />
                <p className="text-md text-white">
                    ...every day! Welcome to Cyberter's - small design studio of new technologies lovers. We can offer full support in the design of digital services as well as traditional advertising materials.
                </p>
                <div className="flex flex-row border-t border-solid border-white pt-1 mt-4">
                    <h3 className="text-lg">areas of interest</h3>
                    <small className="ms-auto my-auto">click on the right side >>></small>
                </div>
                <ServiceItem title={selectedService} desc={selectedServiceObject?.desc} page={selectedServiceObject?.page}/>
            </div>
            <div className="col-span-5 flex relative">
                <div className="absolute left-48 opacity-60">
                    <img src={image02} alt="" style={{
                        height: `25vw`,
                        mixBlendMode: `hard-light`
                    }}/>
                </div>
                <div className="absolute right-56 top-24">
                    <img src={image} alt="" style={{
                        height: `25vw`,
                        mixBlendMode: `hard-light`
                    }}/>
                </div>
                <div className="absolute -right-16 -top-24 opacity-80">
                    <img src={image03} alt="" style={{
                        height: `25vw`,
                        mixBlendMode: `hard-light`,
                        filter: `invert(1)`
                    }}/>
                </div>
                <div className="flex flex-col space-y-8 ms-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedService(service.title)}
                            className={`cursor-pointer ${selectedService === service.title ? "line-through decoration-sky-600/70 decoration-8 underline-offset-4" : ""}`}
                        >
                            <GlitchText text={service.title} size={`text-4xl ${service.xOffset}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
