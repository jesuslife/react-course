function App() {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  };

  return (
    <form onSubmit={submit}>
      {/* <form action="/lala" method="POST"> */}
      <div>
        <span>lala</span>
        <input name="campo" />
      </div>
      <input name="campo2" />
      {/* submit  es como colocar un boton pero asociado con un input*/}
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default App;
