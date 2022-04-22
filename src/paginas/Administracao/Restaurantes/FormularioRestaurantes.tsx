import { TextField, Button, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";

const FormularioRestaurantes = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const parametro = useParams();

  //permite eEditar
  useEffect(() => {
    if (parametro.id) {
      http
        .get<IRestaurante>(`restaurantes/${parametro.id}/`)
        .then((resposta) => setNomeRestaurante(resposta.data.nome));
    }
  }, [parametro]);

  const onSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (parametro.id) {
      http
        .put(`restaurantes/${parametro.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante atualizado com sucesso");
        });
    } else {
      http
        .post("restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante cadastrado com sucesso");
        });
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography component="h1" variant="h6">
        Cadastrar um novo restaurante
      </Typography>
      <Box component="form" onSubmit={onSubmeterForm}>
        <TextField
          value={nomeRestaurante}
          onChange={(evento) => setNomeRestaurante(evento.target.value)}
          label="Nome do Restaurante"
          variant="standard"
          fullWidth
          required
        />

        <Button
          sx={{ marginTop: 1 }}
          type="submit"
          fullWidth
          variant="outlined"
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioRestaurantes;
