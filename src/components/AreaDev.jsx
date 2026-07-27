import { CornerRightDown } from "lucide-react";
import { Wrench } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import { MoveRight } from "lucide-react";


const frameworks = [
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://react.dev",
    skill: "Front-end",
    name: "React",
    description: "A library for building modern and interactive user interfaces.",
    url: "https://react.dev",
  },
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://nextjs.org",
    skill: "Full-stack",
    name: "Next.js",
    description: "A React framework for building fast full-stack applications.",
    url: "https://nextjs.org",
  },
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://tailwindcss.com",
    skill: "Styling",
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for creating modern interfaces.",
    url: "https://tailwindcss.com",
  },
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://nodejs.org",
    skill: "Back-end",
    name: "Node.js",
    description: "A JavaScript runtime for building APIs and server applications.",
    url: "https://nodejs.org",
  },
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://supabase.com",
    skill: "Database",
    name: "Supabase",
    description: "An open-source backend with database, authent. , storage.",
    url: "https://supabase.com",
  },
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://vercel.com",
    skill: "Deploy",
    name: "Vercel",
    description: "A platform to deploy and host modern web applications.",
    url: "https://vercel.com",
  },
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://lucide.dev",
    skill: "Icons",
    name: "Lucide",
    description: "A clean and customizable open-source icon library.",
    url: "https://lucide.dev",
  },
  {
    img: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://www.figma.com",
    skill: "Design",
    name: "Figma",
    description: "A collaborative tool for designing interfaces and prototypes.",
    url: "https://www.figma.com",
  },
];


function AreaDev(){
    return(
       <div id="tools" className="w-screen   bg-gray-950 ">
            <main className="flex flex-col p-15 gap-15 ">
                <div className="flex flex-col gap-5">

                    <div className="flex gap-2 cursor-pointer items-center p-3 bg-blue-900 w-fit rounded-2xl border-1 border-blue-500 text-blue-300 ">
                            <Wrench size={22} className=""/>
                            <h1 className="font-bold text-md">FRAMEWORKS</h1>
                            
                    
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-white text-4xl">Tools for <span className="font-bold text-4xl text-blue-500">developers</span></h1>
                        <p className="text-gray-500">Frameworks, libraries, and websites that help make developers’ daily work easier.</p>
                        
                    </div>

                </div>
                

                <main className="grid grid-cols-4 gap-5">

                    
                    {frameworks.map((site) => (
                        <a href={site.url} key={site.name}>

                            <div className="flex flex-col text-white border-1 border-gray-900  bg-gray-900 w-fit p-7 rounded-3xl gap-4 transition-all duration-300 ease-in hover:-translate-y-3 hover:border-blue-500 hover:border-1 hover:cursor-pointer group ">
                        
                                <img src={site.img} alt="" className="w-[200]: rounded-2xl group-hover:scale-103 transition-all duration-300 ease-in"/>
                                <div className="flex justify-between items-center text-gray-500">
                                        <h1  className="flex p-2 text-sm text-gray-400  rounded-2xl bg-gray-700 w-fit font-bold group-hover:text-blue-400 group-hover:shadow-sm group-hover:shadow-blue-400 transition-all duration-300 ease-in">{site.skill}</h1>
                                        <MoveUpRight/>
                                </div>
                        
                                    <h1 className="font-bold text-2xl">{site.name}</h1>
                                    <p className="text-gray-500 w-70 text-bold">{site.description}</p>
                        <div className="flex gap-2 items-center text-blue-400 transition-all duration-300 ease-in group-hover:gap-3">
                            <p>Visit website </p>
                            <MoveRight size={15}/>
                            
                        </div>

                    </div>
                    

                        </a>

                        
                    ))}

                    

                    
                    
                   
                </main>

            </main>
       </div> 
    )
}

export default AreaDev