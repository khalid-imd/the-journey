import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Image from "../assets/detail-photo.png";
import NavbarLogin from "../components/navbarLogin";
import { API } from "../config/api";
import "./detailPost.css";

const Detail = () => {
  let { id } = useParams();
  let { data: journeys } = useQuery("journeysCache", async () => {
    const response = await API.get("/journey/" + id);
    return response.data.data;
  });

  console.log(journeys);
  return (
    <div>
      <NavbarLogin />
      <Container>
        <div className="mb-4">
          <div className="row">
            <h1 className="col-9 title">{journeys?.title}</h1>
            <h2 className="col-3 author"> {journeys?.user?.fullname} </h2>
          </div>
          <div>
            <h4 className="date"></h4>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <img src={journeys?.image} width="75%" alt="" />
        </div>
        <div>
          <div>
            <h2>ini sub title</h2>
          </div>
          <div className="justify">{journeys?.descriptions}</div>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
