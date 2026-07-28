import { BugIcon, PersonStandingIcon } from "lucide-react"

import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="fixed w-full z-50 ">
            <main className="flex justify-center ">
            <nav className="flex justify-between   bg-gray-900/75   border-1  w-full   max-w-4xl border-gray-500   m-5 rounded-2xl  p-5 items-center text-white  backdrop-blur-sm ">
                <Link to="/" className="flex gap-1.5 cursor-pointer items-center transition-all duration-initial ease-in hover:rotate-2">
                    <BugIcon className=" size-10 bg-blue-500 p-2 rounded-2xl "/>
                   <h1 className="flex text-2xl italic font-bold ">Developers</h1> 
                </Link>
                
                <ul className="flex gap-5 left-1/2  -translate-x-1/2 font-bold">
                    
                    <Link to="/about" className="flex text-white cursor-pointer transition-all duration-100 ease-in hover:hover:text-gray-300">About</Link>
                </ul>
                <div>
                    <Link to="/about">
                        <PersonStandingIcon className="size-10 p-2 rounded-2xl bg-blue-500 text-white transition-all duration-300 ease-in hover:scale-110" />
                    </Link>
                    
                </div>
            </nav>
            </main>
        </div>
    )
}

export default Navbar