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
import api from "../constants/connection";
import imgMarvel from "../img/marvel-studios.jpg";
import BasicModal from "../components/modal/modal";
import { FadeLoader } from "react-spinners";

export const CartoonList = () => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    cartoonList();
    setLoading(false);
  }, []);

  const cartoonList = () => {
    try {
     api
        .get("/comics")
        .then((resp) => setComics(resp.data.data.results))
        .catch((resp) => console.log(resp));
      console.log(comics);
    } catch (error) {
      throw new Error(error);
    }
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
