import { useState } from 'react'
import { marked } from "marked";
import "./styles.css"







function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const inputText = e.target.value;
    const html=marked.parse(inputText)
    setText(html);
  }
// const html = marked.parse(text);
function RenderHTMLString({ htmlString }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlString,
      }}
    />
  );
}




  return (
    
    <>
      <h1>MARKDOWN PREVIEW</h1>
      <textarea name="" id=""cols="30" rows="10" onChange={handleChange}></textarea>
      <RenderHTMLString htmlString={text}/>
    </>
    
  )
}

export default App;
