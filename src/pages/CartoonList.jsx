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
import { useEffect, useState } from "react";
import imgMarvel from "../img/marvel-studios.jpg";
import BasicModal from "../components/modal/modal";
import { FadeLoader } from "react-spinners";
import { cartoonList, detalhaCartoon } from "../constants/request";

export const CartoonList = () => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    mostrarCartoon();
  }, []);

  const mostrarCartoon = async () => {
    const response = await cartoonList();
    setComics(response);
    setLoading(false);
  };

  const detalhesCartoon = async (idQuad) => {
    await detalhaCartoon(idQuad).then(() => acionaToastify());
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
                  <span className="name">{char.series.name}</span>
                </Text>
                <BasicModal />
              </Card>
            );
          })}
        </>
      )}
    </Container>
  );
};
