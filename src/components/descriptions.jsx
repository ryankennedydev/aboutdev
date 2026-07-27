import { DatabaseArrowUpIcon } from "lucide-react";
import { LucideCode2 } from "lucide-react";
import { Palette } from "lucide-react";
import { Database } from "lucide-react";
import { BookOpen } from "lucide-react";


function DescriptionArea(){
    return (
        <div id="categories" className="flex flex-col items-center w-screen p-15 bg-blue-600 border-t-1 border-b-1 border-white">
            <div className="flex flex-col gap-5">
                <div className=" flex flex-col gap-1">
                    <p className="text-white font-bold" >EXPLORE CATEGORIES</p>
                    <h1 className="text-2xl bg-blue-500 w-fit p-1 border-white border-l-3 font-bold">Resources for every developer</h1>
                </div>

                <div className="flex gap-5">
                    <div className="flex flex-col p-5 cursor-pointer bg-gray-950 w-70  rounded-2xl gap-5 transition-all duration-100 ease-in hover:translate-y-1 border-1">
                        <LucideCode2 size={50} className="text-blue-700  bg-blue-200 p-2 rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white font-bold">Development</h1>
                            <p className="text-gray-600 text-sm">Tools to build faster.</p>
                        </div>
                    </div>

                    <div className="flex flex-col p-5 cursor-pointer bg-gray-950 w-70  rounded-2xl gap-5 transition-all duration-100 ease-in hover:translate-y-1 border-1">
                        <Palette size={50} className="text-red-500  bg-red-300 p-2 rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white font-bold">Design</h1>
                            <p className="text-gray-600 text-sm">Resources for better interfaces</p>
                        </div>
                    </div>

                    <div className="flex flex-col p-5 cursor-pointer bg-gray-950 w-70  rounded-2xl gap-5 transition-all duration-100 ease-in hover:translate-y-1 border-1">
                        <Database size={50} className="text-green-700  bg-green-200 p-2 rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white font-bold">Database</h1>
                            <p className="text-gray-600 text-sm">Backend and data solutions</p>
                        </div>
                    </div>

                    <div className="flex flex-col p-5 cursor-pointer bg-gray-950 w-70  rounded-2xl gap-5 transition-all duration-100 ease-in hover:translate-y-1 border-1">
                        <BookOpen size={50} className="text-yellow-700 bg-amber-200 p-2 rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white font-bold">Learning</h1>
                            <p className="text-gray-600 text-sm">Learn and improve your skills</p>
                        </div>
                    </div>

                    
                    

                </div>
            </div>
        </div>  
    )

}

export default DescriptionArea