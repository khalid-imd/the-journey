import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./index.css";
import Jumbotron from "../components/jumbotron";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Login from "../components/login";

const Index = () => {
  let { data: journeys } = useQuery("journeysCache", async () => {
    const response = await API.get("/journeys");
    return response.data.data;
  });

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Jumbotron />
      <Container className="mt-5">
        <div className="mb-4">
          <h1 className="journey">Journey</h1>
        </div>
        <Form className="row mx-4 mb-5">
          <div className="col-10">
            <Form.Control
              type="search"
              classname="form-control rounded "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>

          <Button type="button" className=" col-2 btn-primary">
            search
          </Button>
        </Form>
        <div className="container">
          {journeys?.length !== 0 ? (
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {journeys?.map((item) => (
                <div className="col pt-4" onClick={() => setShowLogin(true)}>
                  <div className="card h-100">
                    <img src={item?.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-10">
                          <h5 className="card-title">{item?.title}</h5>
                        </div>
                      </div>

                      <p className="card-text">{item?.descriptions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Halo halo haloooooooooo</div>
          )}
        </div>
      </Container>
      <Login show={showLogin} setShow={setShowLogin} />
    </div>
  );
};

export default Index;
