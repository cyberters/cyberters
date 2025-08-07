import { useState } from "react";
import GlitchText from "./glitch-text";
import ServiceItem from "./service-item";

export default function Projects() {
    const [selectedRecom, setSelectedRecom] = useState("");

    const services = [
        { 
            title: "food.flow - mobile food assistant", 
            categories: [
                { name: "ux / ui design" },
                { name: "back end / front end" },
                { name: "AI dev" }
            ],
            stack: [
                { name: ".net core 9" },
                { name: "react js" },
                { name: "python" }
            ],
            desc: "An app that allows you to personalize your meal plan based on your calorie needs and dietary restrictions. It generates shopping lists linked to your meal plan and tracks your grocery spending."
        },
        { 
            title: "SolveDesk - an helpdesk support", 
            categories: [
                { name: "ux / ui design" },
                { name: "back end / front end" },
                { name: "AI dev" }
            ],
            stack: [
                { name: ".net core 9" },
                { name: "react js" },
                { name: "python" }
            ],
            desc: "An application supporting the helpdesk department - enables quick search for solutions using simple language, sends procedures to attached task lists."
        },
        { 
            title: "SuperApp - fashion assistant", 
            categories: [
                { name: "ux / ui design" },
                { name: "back end / front end" },
                { name: "AI dev" }
            ],
            stack: [
                { name: "python" },
                { name: "react js" }
            ],
            desc: "Creating an intelligent form that, using a single photo, creates a real advertisement for the product being offered for sale."
        }
    ];

    const selectedServiceObject = services.find(service => service.title === selectedRecom);

    return (
        <div className="grid grid-cols-8 gap-8 mx-auto w-full lg:py-16">
            <div className="flex flex-col space-y-10 col-span-8 lg:col-span-3">
                <GlitchText text={`what we create...`} size={`text-4xl md:text-6xl lg:text-8xl`} />
                <ServiceItem title={selectedRecom} desc={selectedServiceObject?.desc} page={selectedServiceObject?.page}/>
            </div>
            <div className="col-span-8 lg:col-span-5 flex relative">
                <div className="grid grid-cols-3 gap-12 lg:gap-20 lg:ps-20 mt-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedRecom(service.title)}
                            className={`cursor-pointer lg:mx-8 flex flex-col space-y-8 ${selectedRecom === service.title ? "line-through decoration-sky-600/70 decoration-8 underline-offset-4" : ""}`}
                        >
                            <GlitchText text={service.title} size={`text-lg lg:text-2xl`} />
                            <div className="hidden md:flex flex-col space-y-4">
                                <div className="flex flex-row">
                                    {service.categories.map((item) => (
                                        <small className="me-4">{item.name}</small>
                                    ))}
                                </div>
                                <div className="flex flex-row">
                                    {service.stack.map((item) => (
                                        <small className="me-4">{item.name}</small>
                                    ))}
                                </div>
                            </div>
                            <p className="hidden md:block text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
