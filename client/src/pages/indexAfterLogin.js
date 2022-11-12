import React from "react";
import "./indexAfterLogin.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import CardImage from "../assets/index-card-image.png";
import NavbarLogin from "../components/navbarLogin";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";

// const dataCard = [
//   {
//     Image: CardImage,
//     Author: "Cipto",
//     Title: "Bersemayam di tanah Dewata",
//     Date: "29 July 2020",
//     Description:
//       "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
//   },
//   {
//     Image: CardImage,
//     Author: "Cipto",
//     Title: "Bersemayam di tanah Dewata",
//     Date: "29 July 2020",
//     Description:
//       "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
//   },
//   {
//     Image: CardImage,
//     Author: "Cipto",
//     Title: "Bersemayam di tanah Dewata",
//     Date: "29 July 2020",
//     Description:
//       "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
//   },
//   {
//     Image: CardImage,
//     Author: "Cipto",
//     Title: "Bersemayam di tanah Dewata",
//     Date: "29 July 2020",
//     Description:
//       "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
//   },
//   {
//     Image: CardImage,
//     Author: "Cipto",
//     Title: "Bersemayam di tanah Dewata",
//     Date: "29 July 2020",
//     Description:
//       "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
//   },
// ];

const IndexLogin = () => {
  let { data: journeys } = useQuery("journeysCache", async () => {
    const response = await API.get("/journeys");
    return response.data.data;
  });

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
              {journeys?.map((item) => (
                <div className="col pt-4">
                  <div className="card h-100">
                    <img src={item?.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <Link to="/DetailJourney">
                        <h5 className="card-title">{item?.title}</h5>
                      </Link>
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
