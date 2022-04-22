import {
  TextField,
  Button,
  Typography,
  Box,
  AppBar,
  Container,
  Link,
  Toolbar,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";
import { Link as RouterLink } from "react-router-dom";

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
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">Administração</Typography>
            <Box sx={{ display: "flex", flexGrow: 1 }}>

              <Link component={RouterLink} to="/admin/restaurantes">
                <Button sx={{ my: 2, color: "white" }}>Restaurantes</Button>
              </Link>

              <Link component={RouterLink} to="/admin/restaurantes/novo">
                <Button sx={{ my: 2, color: "white" }}>
                  Novo Restaurantes
                </Button>
              </Link>
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container sx={{ mt: 1 }} maxWidth="lg">
          <Paper sx={{ p: 2 }}>
            {/*Conteúdo*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Typography component="h1" variant="h6">
                Cadastrar um novo restaurante
              </Typography>
              <Box component="form" sx={{ width: '100%' }} onSubmit={onSubmeterForm}>
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
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default FormularioRestaurantes;
