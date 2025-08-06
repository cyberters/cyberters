import logo from '../assets/svg/logo.svg'

export default function Navigation() {
    return (
    <header class="bg-black text-white">
        <div class="flex justify-between items-center">
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