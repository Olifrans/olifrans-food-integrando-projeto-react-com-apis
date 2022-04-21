import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const FormularioRestaurantes = () => {

  const [nomeRestaurante, setNomeRestaurante] = useState("");

  const onSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    axios
      .post("http://localhost:8000/api/v2/restaurantes/", {
        nome: nomeRestaurante,
      })
      .then(() => {
        alert("Restaurante cadastrado com sucessoo");
      });
  };

  return (<form onSubmit={onSubmeterForm}>
      <TextField
        value={nomeRestaurante}
        onChange={(evento) => setNomeRestaurante(evento.target.value)}
        label="Nome do Restaurante"
        variant="standard"
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  );
};

export default FormularioRestaurantes;
