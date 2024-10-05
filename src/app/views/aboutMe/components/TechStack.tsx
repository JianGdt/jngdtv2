import { languages, tools } from "@/app/constant/techStack";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function TechStack() {
    const [selectedTab, setSelectedTab] = useState<"LANGUAGES" | "TOOLS">("LANGUAGES");
    
    const handleTabChange = (tab: "LANGUAGES" | "TOOLS") => {
        setSelectedTab(tab);
    }

return (
    <>
    <div className="flex justify-start mb-2 gap-4">
           <button
             className={`py-2 ${selectedTab === "LANGUAGES" ? "border-b-4 border-gray-400" : ""}`}
             onClick={() => handleTabChange("LANGUAGES")}
           >
             Languages
           </button>
           <button
             className={`py-2 ${selectedTab === "TOOLS" ? "border-b-4 border-gray-400" : ""}`}
             onClick={() => handleTabChange("TOOLS")}
           >
             Tools
           </button>
         </div>
         <ul className="grid grid-cols-5 gap-2">
           {(selectedTab === "LANGUAGES" ? languages : tools).map((tech, idx) => (
             <li key={idx} className="rounded-md bg-white flex justify-center p-3 drop-shadow-2xl">
               <Image src={tech.imageUrl} alt={selectedTab.toLowerCase()} width={100} height={100} />
             </li>
           ))}
         </ul>
</>
    )
}