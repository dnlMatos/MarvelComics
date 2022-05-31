import { Card, CardImg, Container, Header, Img, Text } from "./style";
import { useEffect, useState } from "react";
import api from "../constants/connection";
// import { BeatLoader } from "react-spinners";

export const CartoonList = () => {
  // const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    cartoonList();
  }, []);

  const cartoonList = () => {
    try {
      api
        .get("/comics")
        .then((res) => setComics(res.data.data.results))
        .catch((res) => console.log(res));
      console.log(comics);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Container>
      <Header />
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
          </Card>
        );
      })}
    </Container>
  );
};
