import { Code2Icon, Gift } from "lucide-react";
import { GiftIcon } from "lucide-react";
import { Mail } from "lucide-react";

import { Link } from "react-router-dom";


function Footer(){
    return (
        <div id="footerArea" className="flex justify-between border-t-1 items-center  border-gray-600 bg-black p-25">
            <main className="flex flex-col gap-10">
                <div className="text-2xl text-white font-bold flex items-center gap-5">
                    <Code2Icon size={50} className="text-white bg-blue-600 p-3 rounded-lg"/>
                    <h1>About<span className="text-blue-600">Dev</span></h1>
                </div>

                <div>
                    <p className="text-gray-600  w-120">Discover useful websites,tools, framkeworks and resources to help developers build better projects</p>
                </div>    
                    
                <div className="flex gap-3 text-white ">
                    <Mail className="p-3 size-12 cursor-pointer bg-black border-1 border-gray-600 rounded-2xl hover:-translate-y-2 transition-all  duration-200 ease-in "/>

                    <Mail className="p-3 size-12 cursor-pointer bg-black border-1 border-gray-600 rounded-2xl hover:-translate-y-2 transition-all  duration-200 ease-in"/>

                    <Mail className="p-3 size-12 cursor-pointer bg-black border-1 border-gray-600 rounded-2xl hover:-translate-y-2 transition-all  duration-200 ease-in"/>
                </div>
            </main>

            <main className="flex gap-30">
                <div className="flex flex-col gap-5">
                    <h1 className="text-white font-bold">EXPLORE</h1>
                    <div className="flex flex-col gap-3 text-gray-500">
                        <a href="/#home">
                            <p className="transition-all duration-300 ease-in hover:text-blue-400">Home</p>
                        </a>
                        <a href="/#categories">
                            <p className="transition-all duration-300 ease-in hover:text-blue-400">Categories</p>
                        </a>
                        <a href="/#tools">
                            <p className="transition-all duration-300 ease-in hover:text-blue-400">Tools</p>
                        </a>
                    </div>

                </div>


                <div className="flex flex-col gap-5">
                    <h1 className="text-white font-bold">ABOUT</h1>
                    <div className="flex flex-col gap-3 text-gray-500">
                        <Link to="/about">
                            <p className="transition-all duration-300 ease-in hover:text-blue-400">About us</p>
                        </Link>
                        <a href="/#contact">
                            <p className="transition-all duration-300 ease-in hover:text-blue-400">Contact</p>
                        </a>
                        <a href="https://github.com/ryankennedydev/aboutdev">
                            <p className="transition-all duration-300 ease-in hover:text-blue-400">Github</p>
                        </a>
                    </div>

                </div>
            </main>


        </div>
    )
}

export default Footer