import {
  Card,
  CardImg,
  Container,
  Spinner,
  Header,
  IM,
  Img,
  Text,
  Search,
  Input,
} from "./style";
import "../components/modal/style.css"
import * as React from 'react';
import { useEffect, useState } from "react";
import imgMarvel from "../img/marvel-studios.jpg";
import { FadeLoader } from "react-spinners";
import { cartoonList } from "../constants/request";
import BasicModal from "../components/modal/modal";

export const CartoonList = () => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    mostrarCartoon();
  }, []);

  const mostrarCartoon = async () => {
    const response = await cartoonList();
    setComics(response.data.results);
    setLoading(false);
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
          <Search><Input placeholder="Buscar por" /></Search>
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
                <BasicModal id={char.id} />
              </Card>
            );
          })}
        </>
      )}
    </Container>
  );
};
