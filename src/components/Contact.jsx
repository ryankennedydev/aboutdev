import { Mail, Send } from "lucide-react";

import { useState } from "react";


function Contact(){

    const [name,setName] = useState("")
    const nameToolong = name.length > 35

    const [email,setEmail] = useState("")

    const [description, Setdescription] = useState("")

    const descriptionToolonge = description.length > 350
    const emailToolonge = email.length < 0

    function SendInfo(event){
        event.preventDefault()

        if (nameToolong && descriptionToolonge) {
            return
        }
        else {
            alert("ok,thx")
        }
    }

    

    return (
        <main  className="flex w-screen h-screen  bg-blue-950 border-1 items-center justify-center">
            <form id="contact"  className="flex flex-col gap-5 bg-slate-900  h-fit p-10 w-fit  border-1 rounded-2xl border-slate-600/12">
                <div className="flex gap-2 items-center font-bold text-2xl text-white">
                    <Mail className="size-10 p-2.5 bg-blue-500 rounded-lg"/>
                    <div className="font-bold ">
                        <p className="text-sm text-blue-500">GET IN TOUCH</p>
                        <h1 className="">Contact us</h1>
                    </div>
                </div>

                <div>
                    <p className="text-gray-500 w-140 font-bold">Have a suggestion, question, or want to share a useful developer
                        resource? Send us a message.</p>
                </div>

                <main className="flex flex-col gap-7 text-slate-200 text-sm font-bold ">

                    <div className="flex justify-between relative w-full w-max-full ">
                        <input value={name} onChange={(event)=> setName(event.target.value)} id="nameInput" type="text" placeholder="Your name" className={`w-130 bg-slate-800 outline-none p-2 border-1 cursor-pointer border-slate-700 rounded-xl transition-all duration-300 ease-in ${nameToolong ? "text-red-500 focus:border-red-500" : "text-white focus:border-blue-500"}`}/>
                        <p id="nameErro" className={`text-sm  absolute right-11.5 top-9.5 ${nameToolong ? "text-red-700" :"text-white"}`}><span>{name.length}</span>/35</p>
                    </div>

                    <div className="flex flex-col relative">
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Your email (optional)" className="w-130 bg-slate-800 outline-none p-2 border-1 cursor-pointer border-slate-700 rounded-xl transition-all duration-300 ease-in focus:border-blue-500"/>
                        
                    </div>

                    <div className="flex flex-col relative">
                    <textarea placeholder="Write your message..." value={description} onChange={(event) => Setdescription(event.target.value)}  className={`h-28 w-130  rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-left align-top outline-none transition-all duration-300 ease-in focus:border-blue-500 ${descriptionToolonge ? "text-red-500 focus:border-red-500" : "text-white focus:border-blue-500"}`}/>
                        <div className="flex justify-between relative w-full w-max-full ">
                            
                            <p className={`text-sm absolute right-11.5 transition-all duration-300 ease-in ${nameToolong, descriptionToolonge ? "text-red-700": "text-white"} `}>{description.length}/350</p>
                            
                        </div>
                    </div>

                    <div className="flex">
                        <button onClick={SendInfo} disabled={nameToolong} className={`flex  gap-1 w-130  p-3 cursor-pointer rounded-2xl items-center justify-center hover:scale-102 transition-all duration-300 ease-in ${nameToolong ? "bg-gray-500" : "bg-blue-500"} ${descriptionToolonge ? "bg-gray-500" : "bg-blue-500" }` }>
                            <h1>Send message</h1>
                            <Send className="size-5"/>
                        </button>
                    </div>

                </main>

                

            </form>

        </main>
    )
}

export default Contact
