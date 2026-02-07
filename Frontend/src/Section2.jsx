import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RecruiterFlowSection() {

  const [active, setActive] = useState("main");

  return (

<section className="bg-black text-white py-24 overflow-hidden">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center px-6">

{/* LEFT TEXT */}
<div>
<h2 className="text-5xl font-bold leading-tight">
AI Recruiting Software
<br/>That Works Like Your
<br/>Own HR Team
</h2>

<p className="text-gray-400 mt-6 text-lg">
Build custom hiring workflows in minutes. No coding required.
</p>
</div>

{/* RIGHT CARD STACK */}
<div className="relative h-[520px] flex items-center justify-center">

{/* LEFT PEEK CARD */}
<motion.div
onMouseEnter={()=>setActive("flow3")}
onMouseLeave={()=>setActive("main")}
animate={{
x: active==="flow3" ? -260 : -180,
scale: active==="flow3" ? 1 : 0.92,
rotateY: active==="flow3" ? 0 : 8,
zIndex: active==="flow3" ? 30 : 5
}}
transition={{type:"spring", stiffness:140, damping:18}}
className="absolute left-0 origin-right cursor-pointer"
>
<FlowCard title="Passive Candidate Re-engagement">
<FlowChart3/>
</FlowCard>
</motion.div>

{/* MAIN CENTER CARD */}
<motion.div className="relative z-20">
<FlowCard title="Automated Screening & Scheduling">
<FlowChart1/>
</FlowCard>
</motion.div>

{/* RIGHT PEEK CARD */}
<motion.div
onMouseEnter={()=>setActive("flow2")}
onMouseLeave={()=>setActive("main")}
animate={{
x: active==="flow2" ? 260 : 180,
scale: active==="flow2" ? 1 : 0.92,
rotateY: active==="flow2" ? 0 : -8,
zIndex: active==="flow2" ? 30 : 5
}}
transition={{type:"spring", stiffness:140, damping:18}}
className="absolute right-0 origin-left cursor-pointer"
>
<FlowCard title="Multi-Stage Interview Automation">
<FlowChart2/>
</FlowCard>
</motion.div>

</div>

</div>
</section>
);
}

////////////////////////////////////////////////////////////

function FlowCard({title, children}){

return(
<div className="
w-[360px]
bg-gradient-to-b from-cyan-900 via-blue-900 to-slate-900
border border-cyan-400/40
rounded-[20px]
p-6
shadow-[0_0_40px_rgba(0,180,255,0.25)]
">

<h3 className="font-semibold mb-6">{title}</h3>
{children}

</div>
);
}

////////////////////////////////////////////////////////////

function FlowChart1(){
return(
<div className="flex flex-col items-center gap-3 text-sm">

<Node text="New Application Submitted" color="purple"/>
<Line/>
<Node text="AI Resume Screening (Top 20%)" color="green"/>
<Line/>
<Node text="Auto-send Screening Questions" color="blue"/>
<Line/>

<Decision text="Score > 75%?"/>

<div className="flex gap-4 mt-4">
<Node text="Auto Schedule Interview" color="green"/>
<Node text="Thank You Email + Talent Pool" color="red"/>
</div>

<Line/>
<Node text="Send Reminder 24h Before Interview" color="yellow"/>

<Benefit text="Screen 250+ applications in minutes vs. 8 hours manually"/>

</div>
);
}

////////////////////////////////////////////////////////////

function FlowChart2(){
return(
<div className="flex flex-col items-center gap-3 text-sm">

<Node text="Candidate Accepts Interview Invite" color="purple"/>
<Line/>
<Node text="AI Video Interview (Round 1)" color="green"/>
<Line/>
<Node text="AI Scores Responses" color="blue"/>
<Line/>

<Decision text="Score > 80%?"/>

<Benefit text="Reduce time-to-hire from 42 days to 12 days"/>

</div>
);
}

////////////////////////////////////////////////////////////

function FlowChart3(){
return(
<div className="flex flex-col items-center gap-3 text-sm">

<Node text="Candidate Rejected (60-74%)" color="purple"/>
<Line/>
<Node text="Add to Future Talent Database" color="green"/>
<Line/>
<Node text="Wait 3 Months" color="blue"/>
<Line/>

<Decision text="New Role Opens?"/>

<Benefit text="Build a qualified talent pipeline automatically — never start from zero"/>

</div>
);
}

////////////////////////////////////////////////////////////

function Node({text,color}){

const colors={
blue:"bg-blue-500/30 border-blue-400/50",
green:"bg-green-500/30 border-green-400/50",
purple:"bg-purple-500/30 border-purple-400/50",
red:"bg-red-500/30 border-red-400/50",
yellow:"bg-yellow-500/30 border-yellow-400/50"
};

return(
<motion.div
whileHover={{scale:1.05}}
className={`px-4 py-2 rounded-xl border ${colors[color]}`}
>
{text}
</motion.div>
);
}

////////////////////////////////////////////////////////////

function Decision({text}){
return(
<div className="w-20 h-20 rotate-45 bg-orange-400 flex items-center justify-center text-black text-xs">
<span className="-rotate-45">{text}</span>
</div>
);
}

////////////////////////////////////////////////////////////

function Line(){
return <div className="w-[2px] h-5 bg-cyan-400/40"/>;
}

////////////////////////////////////////////////////////////

/* 🔥 PREMIUM ANIMATED BENEFIT */

function Benefit({text}){

return(
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.6}}
className="
relative mt-6 text-center text-xs text-cyan-200
px-4 py-2 rounded-lg
border border-cyan-400/30
overflow-hidden
">

<motion.div
animate={{x:["-100%","100%"]}}
transition={{repeat:Infinity, duration:4, ease:"linear"}}
className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
/>

⭐ {text}

</motion.div>
);
}
