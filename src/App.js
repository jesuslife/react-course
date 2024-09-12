import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({ normal: "", texto: "", select: "" });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  console.log(value);

  return (
    <div>
      {/*tenemos que pasar el valor que el componente conrolado va a tener */}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" onChange={handleChange} value={value.texto} />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">----seleccione----</option>
        <option value="chanchitofeliz">chancito feliz</option>
        <option value="chanchotriste">chancho triste</option>
      </select>
    </div>
  );
};

export default App;
