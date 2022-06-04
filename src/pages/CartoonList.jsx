import { Spinner, Header } from "./style";
import "./style.css";
import "../components/modal/style.css";
import * as React from "react";
import { useEffect, useState } from "react";
import imgMarvel from "../img/marvel-studios.jpg";
import { FadeLoader } from "react-spinners";
import { cartoonList } from "../constants/request";
import BasicModal from "../components/modal/modal";

export const CartoonList = () => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    mostrarCartoon();
  }, [search]);

  const mostrarCartoon = async () => {
    const response = await cartoonList();
    setComics(response.data.results);
    setLoading(false);
  };

  const atualizaInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container-fluid p-0">
      {loading ? (
        <Spinner>
          <FadeLoader color="#ffffff" />
        </Spinner>
      ) : (
        <>
          <Header className="d-flex p-0 flex-column align-items-center justify-content-center">
            <img className="img-fluid mx-auto mt-3 mb-3" src={imgMarvel} alt="Commic"/>
            <input
              className="mb-3 p-1 rouded"
              placeholder="Buscar por..."
              value={search}
              onChange={atualizaInput}
            />
          </Header>
          {search === "" ? (
            <>
              <div className="container p-0 mt-5">
                <div className="row d-flex p-0">
                  {comics.map((char) => {
                    return (
                      <div className="d-flex col-xs-12 col-sm-6 col-md-3 justify-content-center mb-5 cont-card">
                        <div
                          key={char.id}
                          className="card d-flex align-items-center text-center"
                        >
                          <div className="cont-img">
                            <img
                              className="rounded img-thumbnail p-2 img-cart"
                              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                              alt="Commic"
                            ></img>
                          </div>
                          <div className="card-body d-flex flex-column justify-content-start">
                            <div className="card-title">{char.series.name}</div>
                            <BasicModal id={char.id} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container p-0 mt-5">
                <div className="row d-flex p-0">
                  {comics
                    .filter((cartoon) => {
                      return cartoon.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                    .map((cartoonn) => {
                      return (
                        <div className="d-flex col-xs-12 col-sm-6 col-md-3 justify-content-center mb-5 cont-card">
                          <div
                            key={cartoonn.id}
                            className="card d-flex align-items-center text-center"
                          >
                            <div className="cont-img">
                              <img
                                className="rounded img-thumbnail p-2 img-cart"
                                src={`${cartoonn.thumbnail.path}.${cartoonn.thumbnail.extension}`}
                                alt=""
                              ></img>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-start">
                              <div className="card-title">
                                {cartoonn.series.name}
                              </div>
                              <BasicModal id={cartoonn.id} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
