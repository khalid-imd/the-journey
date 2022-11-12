import React from "react";
import "./indexAfterLogin.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import NavbarLogin from "../components/navbarLogin";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";

const IndexLogin = () => {
  let { data: journeys } = useQuery("journeysCache", async () => {
    const response = await API.get("/journeys");
    return response.data.data;
  });

  const navigate = useNavigate();

  return (
    <div>
      <NavbarLogin />
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
              {journeys?.map((item, index) => (
                <div
                  className="col pt-4"
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                  key={index}
                >
                  <div className="card h-100">
                    <img src={item?.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item?.title}</h5>

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
    </div>
  );
};

export default IndexLogin;
