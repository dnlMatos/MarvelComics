import {
  Card,
  CardImg,
  Container,
  Spinner,
  Header,
  IM,
  Img,
  Text,
} from "./style";
import "../components/modal/style.css"
import * as React from 'react';
import { useEffect, useState } from "react";
import imgMarvel from "../img/marvel-studios.jpg";
import { FadeLoader } from "react-spinners";
import { cartoonList, detalhaCartoon } from "../constants/request";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid rgba(62, 5, 5, 100%)',
  boxShadow: 24,
  p: 4,
};

export const CartoonList = () => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [comic, setComic] = useState([])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    mostrarCartoon();
  }, []);

  const mostrarCartoon = async () => {
    const response = await cartoonList();
    setComics(response.data.results);
    setLoading(false);
  };

  const detalhesCartoon = async (idQuad) => {
    handleOpen() 
    const resp = await detalhaCartoon(idQuad);
    resp?.data && setComic(resp.data.results);
    console.log(comic);
  };

  return (
    <Container>
      {loading ? (
        <Spinner>
          <FadeLoader color="#ffffff" />
        </Spinner>
      ) : (
        <>
          <Header>
            <IM src={imgMarvel} />
          </Header>
          {comics.map((char) => {
            return (
              <Card key={char.id}>
                <CardImg>
                  <Img
                    src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                    alt=""
                  ></Img>
                </CardImg>
                <Text>
                  <span onClick={() => detalhesCartoon(char.id)} className="name">{char.series.name}</span>
                </Text>
                <div>
                  <Button variant='outlined' className="btn-detalhes" onClick={()=>detalhesCartoon(char.id)}>Mais detalhes</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Nome:{char.series.name}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </Card>
            );
          })}
        </>
      )}
    </Container>
  );
};
