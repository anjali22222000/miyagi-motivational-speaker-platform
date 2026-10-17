import React,{useState,useEffect,useMemo,createElement as h} from "react";
import {createRoot} from "react-dom/client";
import "./styles/main.css";
import {App} from "./App.jsx";

if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches)addEventListener("pointermove",e=>{const g=e.target.closest&&e.target.closest(".glow");if(g){const r=g.getBoundingClientRect();g.style.setProperty("--mx",e.clientX-r.left+"px");g.style.setProperty("--my",e.clientY-r.top+"px")}},{passive:true});
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){addEventListener("pointermove",e=>{const el=e.target.closest&&e.target.closest(".ev,.sp");if(el){const b=el.getBoundingClientRect();el.style.setProperty("--ry",((e.clientX-b.left)/b.width-.5)*8+"deg");el.style.setProperty("--rx",-((e.clientY-b.top)/b.height-.5)*6+"deg")}const m=e.target.closest&&e.target.closest(".ctas .btn,.nl .btn");if(m){const b=m.getBoundingClientRect();m.style.setProperty("--tx",(e.clientX-b.left-b.width/2)*.14+"px");m.style.setProperty("--ty",(e.clientY-b.top-b.height/2)*.22+"px")}},{passive:true});addEventListener("pointerout",e=>{const t=e.target.closest&&e.target.closest(".ev,.sp,.ctas .btn,.nl .btn");if(t&&!t.contains(e.relatedTarget)){["--rx","--ry","--tx","--ty"].forEach(k=>t.style.removeProperty(k))}})}
createRoot(document.getElementById("root")).render(h(App));
