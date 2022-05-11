import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  
  const [input,setInput]=useState("")

  function onSubmit(e){
    e.preventDefault();
    if(!input)return alert("Por favor escriba una ciudad")
    onSearch(input);
    setInput("")
  }

  const onInputChange = (e)=>{
    setInput(e.target.value)
  }
  
  return (
    
    <form onSubmit={e=>onSubmit(e)}>
      <input
        value={input}
        onChange={(e)=>onInputChange(e)}
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
