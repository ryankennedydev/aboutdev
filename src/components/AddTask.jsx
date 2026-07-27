import { HatGlasses } from "lucide-react"
import { Search } from "lucide-react"
import { MoveRightIcon } from "lucide-react"


function AddTask(){
    return (
        <div id="home"  className="flex bg-gray-950 w-screen h-screen justify-center">
            <div className="flex p-2 justify-center">
                <div  className="flex  gap-5 items-center">
                    <div className="flex h-30  w-100 gap-1 text-blue-100 border-l-4 rounded-2xl p-5  bg-blue-600 items-center shadow-lg shadow-blue-900  justify-between transition-all duration-300 ease-in hover:shadow-md hover:h-100">

                        <div className="">
                            <p className="text-sm text-gray-400 font-bold">DISCOVER MORE</p>
                            <h1 className= " font-bold text-blue-100 w-0.5 text-2xl    ">About Developers</h1>
                        </div>
                        <HatGlasses size={50} className="text-blue-100" />
                    </div>

                    <div className="flex-col ">
                        <div className="flex items-center text-1xl gap-1.5 text-blue-400 m-2">
                            <Search />
                            <p className="font-bold text-sm">SEARCH ABOUT DEVELOPERS</p>
                        </div>
                        <div className="flex-col  gap-15">
                            <p className="w-80  text-5xl p-3  text-white">Find useful websites and tools for your <span className="text-blue-600">next project.</span></p>
                            <p className="text-gray-500 m-3 w-120">
                                Explore handpicked resources for design, coding, productivity,
                                learning and everything a developer needs.
                            </p>
                            
                        </div>
                        <div>
                            <button className="text-blue-50 flex  items-center gap-4 m-3 rounded-2xl bg-blue-600 p-3 hover:scale-102 hover:opacity-70 cursor-pointer transition-all duration-100 ease-in" >
                                <a href="#tools"><p className="font-bold text-white ">Explore tools</p></a>
                                <MoveRightIcon/>
                            </button>
                        </div>
                        
                        
                    </div>
                    
                
                
                </div>
                
            </div>
            
        </div>
        
    )
}

export default AddTask