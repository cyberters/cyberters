import { NavLink } from "react-router-dom";

export default function ServiceItem({title, desc, page}) {
    return (
        <div className="flex flex-col text-white space-y-3">
            <h4 className="text-2xl glitch">{title}</h4>
            {desc && <p>{desc}</p>}
            {page && <NavLink to={page} className={`me-auto mt-8 glitch`}>
                <h4 className="text-md lowercase border border-white border-solid me-auto px-3 py-2 mt-6 glitch">Check more >>></h4>
            </NavLink>}
        </div>
    )
}