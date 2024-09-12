import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    check: false,
    estado: "feliz",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.type, e.target.checked, e.target.value);
    setValue({
      ...value,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
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
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          type="radio"
          value="feliz"
          name="estado"
          checked={value.estado === "feliz"}
        />
        Feliz
        <input
          onChange={handleChange}
          type="radio"
          value="triste"
          name="estado"
          checked={value.estado === "triste"}
        />
        Triste
        <input
          onChange={handleChange}
          type="radio"
          value="felipe"
          name="estado"
          checked={value.estado === "felipe"}
        />
        Felipe
      </div>
    </div>
  );
};

export default App;
