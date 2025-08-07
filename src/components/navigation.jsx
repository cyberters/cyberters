import logo from '../assets/svg/logo.svg'

export default function Navigation() {
    return (
    <header class="bg-black text-white pt-12 md:pt-0">
        <div class="flex flex-col space-y-4 md:flex-row justify-between items-center">
            <img src={logo} alt="" srcset="" className='h-12'/>
            <nav>
                <ul class="flex space-x-12">
                    <li><a href="#about" class="hover:underline">about us / services</a></li>
                    {/* <li><a href="#services" class="hover:underline">recommendations</a></li> */}
                    <li><a href="#contact" class="hover:underline">contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}