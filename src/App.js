import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [form, setform] = useState({
    input:"",
  })

  const handleChange = async (e) => {
    const {name, value } = e.target;
    await setform({
      ...form,
      [name]:value,
    });
  };

  const copiarPortapaeles = () =>{
    var aux = document.createElement("input");
    aux.setAttribute("value", form.input);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    alert("Se copio al portapapele");
  }
  return (
    <div className="App">
      <input className="form-constrol" type="text" name="input" onChange={handleChange}/>
      
      <button className="btn btn-primary" onClick={copiarPortapaeles}>  Copiar</button>
    </div>
  );
}

export default App;
