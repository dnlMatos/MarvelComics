import * as React from "react";
import "./style.css";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { detalhaCartoon } from "../../constants/request";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid rgba(62, 5, 5, 100%)",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [comic, setComic] = React.useState([{}]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    detalhaCartoon(props.id);
  }, [props.id]);

  const detalhesCartoon = async (idQuad) => {
    handleOpen();
    const resp = await detalhaCartoon(idQuad);
    setComic(resp.data.results);
    console.log(resp.data.results);
  };

  return (
    <>
      {comic.map((resp, index) => {
        return (
          <div key={index}>
            <Button
              variant="outlined"
              className="btn-detalhes"
              onClick={() => detalhesCartoon(props.id)}
            >
              Mais detalhes
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Nome: {resp.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {resp.description
                    ? resp.description
                    : "Quadrinho sem descrição"}
                </Typography>
              </Box>
            </Modal>
          </div>
        );
      })}
    </>
  );
}
