// Convertir la clase App en una función de flecha que retorne un componente funcional
import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

// Utilizando el hook useState, reemplazar el estado de la clase App por un estado funcional
const App = () => {
  const [people, setPeople] = useState([]);  // Estado funcional

  const removePeople = (index) => { // Función para eliminar una persona
    setPeople(people.filter((character, i) => { // Filtrar el array de personas
      return i !== index; // Retornar todas las personas menos la que se quiere eliminar
    }));
  };

  const handleSubmit = (character) => { // Función para agregar una persona
    setPeople([...people, character]); // Agregar una persona al array de personas
  }; 

  const title = <h1>Nice People</h1>; // Título del componente

  return (
    <div className="container">
      <Table                // Componente Table
        peopleData={people} // Propiedad peopleData
        removePeople={removePeople} // Propiedad removePeople
        title={title}             // Propiedad title
      /> 
      <Form handleSubmit={handleSubmit} />  
    </div> // Componente Form
  );
};

export default App;