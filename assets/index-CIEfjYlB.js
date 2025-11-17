import{d as n,r as i,j as e}from"./index-Cw7BC0ug.js";import{G as s,m as c}from"./iconBase-BSWFz5Nj.js";function d(t){return s({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7v4a1 1 0 0 0 1 1h3"},child:[]},{tag:"path",attr:{d:"M7 7v10"},child:[]},{tag:"path",attr:{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z"},child:[]},{tag:"path",attr:{d:"M17 7v4a1 1 0 0 0 1 1h3"},child:[]},{tag:"path",attr:{d:"M21 7v10"},child:[]}]})(t)}const x=n.div`
    inset: 0;
    z-index: 0;
    position: fixed;
    pointer-events: none;
    background: ${({x:t,y:o})=>`
        radial-gradient(600px at ${t}px ${o}px, #FFFFFF14,
        transparent 80%)
    `};
    transition: background-color 50ms ease;
`,p=n(c.main)`
    display: flex;
    max-width: 800px;
    margin: 0px auto;
    min-height: 100vh;
    padding: 48px 12px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`,l=n.p`
    font-size: 16px;
    text-align: center;
`,h=n(d)`
    font-size: 120px;
    stroke: #F3F3F3;
    display: inline-flex;
`,f=()=>{const[t,o]=i.useState({x:0,y:0});return i.useEffect(()=>{const a=r=>{o({x:r.clientX,y:r.clientY})};return window.addEventListener("mousemove",a),function(){window.removeEventListener("mousemove",a)}},[]),e.jsxs(i.Fragment,{children:[e.jsx(x,{x:t.x,y:t.y}),e.jsxs(p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[e.jsx(h,{}),e.jsx(l,{children:"A página que você está tentando acessar não existe."})]})]})};export{f as default};
