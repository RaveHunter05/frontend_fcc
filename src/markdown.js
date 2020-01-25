import React, {useState} from 'react';
import './markdown.css'
let marked=require("marked");


function Markdown(){
    const [texto, setTexto]=useState("Hello, World! ===\n---\n# This is an h1\n## This is an h2\n### This is an h3\n#### This is an h4\n##### This is an h5\n###### This is an h6 \n [![moon](moon.jpg)](/uri) \n \n - asdf \n\n >→→foo \n\n __asdf__ \n\n [foo](bar) \n\n ```asdf``` \n\n >     foo \n\n  ");
    const [marcado, setMarcado]=useState('');

    function handleText(event){
        setTexto(event.target.value);
    }

    function market(valor){
        var asdf=(marked(valor,{sanitize:true}));
        return {__html:asdf};
    }

    return(
        <div>
            <textarea value={texto} onChange={handleText} id="editor">
                <h1>asdf</h1>
            </textarea>
            <div id="preview" dangerouslySetInnerHTML={market(texto)}>
            </div>
        </div>
    )
}

export default Markdown;