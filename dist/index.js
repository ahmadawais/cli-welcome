import o from"chalk";import b from"clear-any-console";var n=o.dim,x=(r={})=>{let s={...{title:"ADD A HEADING",tagLine:"",description:"",bgColor:"#ffffff",color:"#000000",bold:!0,clear:!0,version:""},...r},{title:c,tagLine:i,description:d,bgColor:e,color:l,bold:t,clear:f,version:a}=s,g=t?o.hex(e).inverse.bold:o.hex(e).inverse,p=t?o.hex(l).bold:o.hex(l);f&&b(),console.log(),console.log(`${p(`${g(` ${c} `)}`)} v${a} ${n(i)}
${n(d)}`),console.log()};export{x as default};
//# sourceMappingURL=index.js.map