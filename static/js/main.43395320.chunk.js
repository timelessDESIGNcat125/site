(this.webpackJsonpcat125site=this.webpackJsonpcat125site||[]).push([[0],{347:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),c=i(43),l=i.n(c),r=(i(59),i(357)),a=i(358),d=i(10),o=i(2),b=i.p+"static/media/bwlogo.cdf67bb4.png",j=i.p+"static/media/logo.bc5a1630.png",h=(i(60),i(44)),g=i.n(h),x=i(1);const u=[{original:"https://www.webdesignmuseum.org/uploaded/timeline/yahoo/yahoo-1994.png"},{original:"https://www.webdesignmuseum.org/uploaded/timeline/microsoft/microsoft-1994.png"},{original:"https://www.webdesignmuseum.org/uploaded/timeline/apple/apple-1996.png"},{original:"https://www.webdesignmuseum.org/uploaded/fullscreen/pepsi-1996.png"},{original:"https://www.webdesignmuseum.org/uploaded/timeline/pizza-hut/pizza-hut-1997.png"},{original:"https://www.webdesignmuseum.org/uploaded/timeline/dell/dell-1996.png"},{original:"https://www.webdesignmuseum.org/uploaded/fullscreen/bestbuy-1997.png"},{original:"https://www.webdesignmuseum.org/uploaded/timeline/geocities/geocities-1996.png"}];function p(){return Object(x.jsx)(g.a,{items:u,showNav:!1,showFullscreenButton:!1,showPlayButton:!1,slideDuration:0,slideInterval:5e3,autoPlay:!0})}const O=e=>{let t=e.toString().length-1;return t>10?(Number(e/10n**BigInt(t-4))/1e4).toString()+`e${t}`:e.toLocaleString("en-US")};function m(){let[e,t]=Object(n.useState)(0n),[i,s]=Object(n.useState)([]),c=i.length;let l=(e,t)=>BigInt(Math.trunc(t**i[e-1]*100)),r=e=>8n**(BigInt(e)-1n)*l(e,1.1)/BigInt(100),a=e=>10n**BigInt(e)*l(e,1.15)/BigInt(100),d=i.reduce(((e,t,i)=>BigInt(e)+BigInt(t)*r(i+1)),0n),o=Object(n.useCallback)((()=>{2n*(e+1n)>10n**BigInt(i.length+1)&&s((e=>[...e,0]))}),[e,i.length]);return Object(n.useEffect)((()=>{const e=setInterval((()=>{o(),t((e=>e+d))}),1e3);return()=>clearInterval(e)}),[e,d]),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"900px",height:"600px",margin:"auto"},children:[Object(x.jsxs)("div",{style:{flex:1,flexBasis:"60%",flexGrow:0,overflow:"auto",textAlign:"center"},children:[Object(x.jsx)("div",{style:{height:"10%"}}),Object(x.jsx)("h1",{children:O(e)}),Object(x.jsx)("h2",{children:d>0?`+${O(d)}/s`:""}),Object(x.jsx)("button",{style:{height:"20%",width:"25%"},onClick:e=>{o(),t((e=>e+1n))},children:Object(x.jsx)("p",{children:"Click"})}),Object(x.jsx)("div",{style:{width:"100%",height:"20px"}}),Object(x.jsx)("button",{style:{opacity:e**3n/10n**11n+"%"},onClick:e=>{o(),t((e=>10n*e))},children:Object(x.jsx)("p",{children:"Cheat"})})]}),Object(x.jsx)("div",{style:{flex:1,flexBasis:"40%",flexDirection:"column",textAlign:"center",overflow:"auto"},children:Array.from(Array(c+1).keys()).slice(1).map((n=>Object(x.jsx)("button",{style:{height:"20%",width:"90%",margin:"10px"},onClick:c=>((n,c)=>{let l=a(c);if(e>=l){let e=i[c-1]+1;s((t=>(t[c-1]=e,t))),t((e=>e-l))}})(0,n),children:Object(x.jsxs)("div",{style:{display:"flex",width:"100%",height:"100%",justifyContent:"space-between"},children:[Object(x.jsxs)("div",{style:{alignSelf:"flex-start"},children:[Object(x.jsxs)("h3",{style:{padding:"10px"},children:["Level ",n]}),Object(x.jsxs)("h4",{children:["+",O(r(n)),"/s"]})]}),Object(x.jsxs)("div",{style:{alignSelf:"flex-end"},children:[Object(x.jsxs)("h4",{children:["x",i[n-1].toLocaleString("en-US")]}),Object(x.jsxs)("h4",{style:{padding:"10px"},children:["Cost: ",O(a(n))]})]})]})},n)))})]})}var w=i.p+"static/media/home.6830ccef.gif";function y(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:w,alt:"",style:{display:"block",width:"90%",margin:"auto"}}),Object(x.jsx)("p",{style:{textAlign:"center"},children:"Click the links in the top left to see more!"})]})}var f=i.p+"static/media/about.f7ce8d16.md",I=i.p+"static/media/critique.87d819bc.md",A=i(359),S=i(356),C=i.p+"static/media/App.81041220.txt",U=i.p+"static/media/Game.76f2c1f1.txt",k=i.p+"static/media/Home.e8ff8a02.txt";function v(){const[e,t]=Object(n.useState)(""),[i,s]=Object(n.useState)(""),[c,l]=Object(n.useState)(""),r=(e,t)=>{Object(n.useEffect)((()=>{fetch(e).then((e=>e.text())).then((e=>t(e)))}))};return r(k,t),r(C,s),r(U,l),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Home.tsx"}),Object(x.jsx)(A.a,{language:"typescript",style:S.a,children:e}),Object(x.jsx)("h1",{children:"App.tsx"}),Object(x.jsx)(A.a,{language:"typescript",style:S.a,children:i}),Object(x.jsx)("h1",{children:"Game.tsx"}),Object(x.jsx)(A.a,{language:"typescript",style:S.a,children:c})]})}function D(){const[e,t]=Object(n.useState)(!0),[i,s]=Object(n.useState)(""),[c,l]=Object(n.useState)("");Object(n.useEffect)((()=>{const e=setInterval((()=>t((e=>!e))),600);return()=>clearInterval(e)}),[]);const h=(e,t)=>{Object(n.useEffect)((()=>{fetch(e).then((e=>e.text())).then((e=>t(e)))}))};return h(f,s),h(I,l),Object(x.jsx)(d.a,{children:Object(x.jsxs)("div",{style:{backgroundImage:"url(data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAB41JREFUeF7tXb2rHUUU3+W+K6SNhQpCQIskpaWliEVII9hYaaMgJl0e+FBLC4VopRJIZWcj2jwDUUnpn2AEbxEQ7ytMsFLJXd7KbHbW2bkzO+fMnDMfm00VuLMz55zf+c3XOXNe3bZtWyX4d//tD7tRn7z5UYLRaYb00eHk+Fo3+NOXPzUKUZ+enrZ1XdNI6OhFKqA2mwMgnWMdXamq558B2VGAYgUkFkNMYMyFIZQOVjdN065WKxCy6Eab7eA1PvRGj9d/cOP4q+5/71x+07cL9HdU+tVsDNlsq/sff7GnGPcUJcGQA8cCRUxD6+/OBK+JIIa88tLrnX4/3Pka7DnSY3av/tMJip1nwQNpDVMBIsQQOmPWEpOOIIaEAMLNCJNSFFPW1MLr6yyQ79gZkgIQiOK2NsO29MIheNcUMp7+rZMhPuygFDBmX64zQgxZnAx5nACJYXDXGNkx5HF3ACdDBKLCSJgdlssLbL9LMLA7Ot/xcvzOyZBYQi9gPLI0iCHcoGDBSLUl5bZDBwjbSR0hPXbdkLshOYTtog4hQjZNs2BIiDVKZMvUjMDCkFibgBAgqb5Vr2qg92bim2+u3+pE0DdL5AzBrgdUhknSz2Zb3bh7exj63Nlnq0svvhwkCjlDrr77XvXrL/eibJOxmnM4iw9DpuQmZwjWSDHbS0DOXzxXff7lJ2RDC1Cg05VrUHKGuAZcfp+2QFEMoYrK5ewURTBEj8eHBoGyBsQaU1fi4akVUJkx/P/oyihEXFrcxWZTK0P2vDKT/Cln9kofyy8VIOMaknv+lB67doKUmuKI8TuGyIwJ/btSvGwKEFW3EvSpm3/b9q+rj9I61X/cCydFIsKU4zlZI9ZI8Q+YbYhw8qCmdfvbH63Mnxo8iHlBj5Gqoy7+wuhOgILMGPixksNWb984atdPrIITvDAixQDEJA81KLd+/qn67P2bwddEqlwDQ2LPr9xTlg0QVU/fg6Z6JybGwYa3R+wVCXZ9hqeQrf5797A9c7DGOLixbYlxCazSOhA+YIhvpnaxwSd1NXo3p8idCSxsZFP2oW7TR6xU1g7J3Pph07Rrz+z3HBLLsF4euz123QpmSGwFSxvPdNUztV7Xu6ZpDzwZUppxYsurb70h4y8MgVgppA3yTFcEQ7wjckhjhNid6ts9hngrTySRmpGhdond61ebbXVy97r1cSWRuOTd1E2za1erg65jjiQArMSmvf5rh5e8Ytbd2SjROw+s3rL9iCHSO6mTADDCkTK0QJaMGIIxXCltS7tBWHZZHp7le2KHDIVjSOHhUYhBIG1YAYFkvztDugVuLwfD9+vM8HQ7ce4AiCG2N+dqYYDY1/cQT4a0yS2Zw2sNmbwwM9xgQgyTrE3Pbt/YCLXcIIbsDaqtJaAbzdyntUSlQHTbejHE5BUqKGL6AoFE7V6B/TnXSs/+5SYAcsD1YwhAMCsgfV0p3ymCc4ejquUrn8k0+nXQ1DUQGUNsrDHFsPW2mA1BLECEjNSMgVxNsTHESCJtwVd3bzmGf6kBgdwXsjIEMLORlDSCjBPaZqiHhSjl5zNmXIb4SBjwjcibuvfg96GH0FdOHIxh22UF2I3tU+qEvCiAqPEQ3TL6A33xe45zvQ1RakBG4/TroaiYR2mT5GsIGz36juW0FTpduc5e8nfMjtHU56zXEG6wOaaw2TOEGxTqw+TCEELEKE73C0MIAaHoamEIwIpU70AAQ+VRL8skqDDCCw++H/1Eub2EGAdy1QHtB9rOyRDq4ipQwUxnotiAQC4DffWxfTe5hoQcrGLeylIbJQUzpA4sDEnhWdSgCB1SJAyCdlnYbMLS2UENLqY/J0MwnalURydHYwcquP2Uw4IYAtVdVpMT7VMDQnFIg+qNbTcJyNRtL3YgyRAXGDGmtNzyraC2JGUIdFBMFgakT1vGi5r9EnoLC5GDog35GkIhlLMPLcerxJQjr3OI0zApGtgS2gLTi1KoYhoze4aoj+6FAnNigxEQSPZ7Su8xAaCGTUt7kOOyZV4M0eLUpkf3QiHuBTolyEl2WTYvyWU6Slm/JRuGjKoeaCWLXDTn+j1FLRc0Q7hOwFz9coHF1S+aIaWegLkMSN3vJENGFT2VwsWiQOZenUZqyQrtL7RS3ogh3Z5fefSYyyILwSaHGExIQE/qODDEWru3kBPwbADZbU7ag+eemv0JGMKy4DbKX9xBp672Z7D6z7c+aKUgo+LJDI80Q+fXYINl1IF++JTLQ709vtOuv/2xE5XzBEwxv2ZkzzBRLBek4koIfQ7xlWQB5H/LTW2WolaUyyXHy+RUMjGPu76WHkwTsqjTVzSG+DIr1ne611I/xFH1mLq8jMqQWMYNGidxaZCFIQb0Ut6rzZYhIQdFjpdRUNbOmiG+f8UgKSA5V7amuFmWbzukh7pyxnRPjj197THE9y89k4c9DYenkIOrLACTPSBUdXvVBzbe7ziUvwsV2zNtc3zs6YuMIVKhkLBnbOWhC62skj3UZWSsd4KOGIKVQDZUi7uIEuG5FKUcqSEr6XECkjIvSzCiOxFfOCwmAqmymOM0n5Qh2U5RE+z2lRk6lf8HQXgbaGVGUYcAAAAASUVORK5CYII=)",minHeight:"100vh"},children:[Object(x.jsx)("nav",{style:{display:"flex",flexDirection:"row"},children:Object(x.jsxs)("ul",{style:{flexShrink:1,backgroundColor:"white",marginLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,borderWidth:3,borderColor:"black",borderStyle:e?"double solid":"solid double"},children:[Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/game",children:"Game"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/critique",children:"Critique"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/inspiration",children:"Inspiration"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/about",children:"About"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/source",children:"Source Code"})})]})}),Object(x.jsx)("div",{style:{margin:"auto",width:"80%"},children:Object(x.jsx)("div",{style:{marginRight:"700px"},children:Object(x.jsx)(r.a.img,{src:e?j:b,alt:"",style:{display:"block",margin:"auto",borderWidth:3,borderColor:"black",borderStyle:e?"double solid":"solid double"},animate:{marginLeft:["50%","100%","50%","0%","50%"]},transition:{ease:"linear",duration:10,repeat:1/0}})})}),Object(x.jsx)("div",{style:{height:"40px"}}),Object(x.jsx)("div",{style:{width:"900px",margin:"auto",backgroundColor:"white",padding:10,borderWidth:10,borderColor:"black",borderStyle:"double"},children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/game",element:Object(x.jsx)(m,{})}),Object(x.jsx)(o.a,{path:"/source",element:Object(x.jsx)(v,{})}),Object(x.jsx)(o.a,{path:"/critique",element:Object(x.jsx)(a.a,{children:c})}),Object(x.jsx)(o.a,{path:"/inspiration",element:Object(x.jsx)(p,{})}),Object(x.jsx)(o.a,{path:"/about",element:Object(x.jsx)(a.a,{children:i})}),Object(x.jsx)(o.a,{path:"/",element:Object(x.jsx)(y,{})})]})}),Object(x.jsx)("div",{style:{height:"100px"}}),Object(x.jsx)("img",{src:`//counter.websiteout.net/compte.php?S='${encodeURI(window.location.hostname)}'&C=7&D=0&N=0&M=0`,alt:"",style:{display:"block",margin:"auto",height:"50px"}})]})})}var L=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,360)).then((t=>{let{getCLS:i,getFID:n,getFCP:s,getLCP:c,getTTFB:l}=t;i(e),n(e),s(e),c(e),l(e)}))};l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root")),L()},59:function(e,t,i){}},[[347,1,2]]]);
//# sourceMappingURL=main.43395320.chunk.js.map