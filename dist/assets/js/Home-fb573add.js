import{B as a}from"./index-aaf4094a.js";import{u as o,b as e,F as r,j as t}from"./vendor-9d4999d7.js";const l=[{point:"Quick & Fast",context:"Browse and track anime fast."},{point:"Multiple Filters",context:"Track with multiple robust filters."},{point:"Easy to Edit",context:"Edit or delete your list with ease."}],d=l,h="/aniwatch/assets/img/6995c44a.gif";function b({onEmit:s}){const c=o();return e(r,{children:[e("header",{className:"header-full glb-container",children:[e("div",{className:"header-title text-white",children:[t("h1",{children:"The Next-Generation Anime Platform"}),t("p",{children:"Discover and track your favorite anime shows with AniWatch!"}),e("div",{className:"header-btn",children:[t(a,{label:"Add Anime",className:"btn btn-primary",width:"160px",onClick:s}),t(a,{label:"Watchlist",className:"btn btn-border",width:"160px",onClick:()=>{c("/watchlist")}})]})]}),t("img",{src:h})]}),t("div",{className:"points glb-container",children:Object.entries(d).map(([i,n])=>e("div",{className:"point text-white",children:[t("div",{className:"point-number",children:+i+1}),t("h3",{className:"point-title",children:n.point}),t("p",{className:"point-context",children:n.context})]},i))})]})}export{b as default};