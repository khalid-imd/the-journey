import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./index.css";
import CardImage from "../assets/index-card-image.png";
import Jumbotron from "../components/jumbotron";

const dataCard = [
  {
    Image: CardImage,
    Author: "Cipto",
    Title: "Bersemayam di tanah Dewata",
    Date: "29 July 2020",
    Description:
      "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
  },
  {
    Image: CardImage,
    Author: "Cipto",
    Title: "Bersemayam di tanah Dewata",
    Date: "29 July 2020",
    Description:
      "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
  },
  {
    Image: CardImage,
    Author: "Cipto",
    Title: "Bersemayam di tanah Dewata",
    Date: "29 July 2020",
    Description:
      "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
  },
  {
    Image: CardImage,
    Author: "Cipto",
    Title: "Bersemayam di tanah Dewata",
    Date: "29 July 2020",
    Description:
      "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
  },
  {
    Image: CardImage,
    Author: "Cipto",
    Title: "Bersemayam di tanah Dewata",
    Date: "29 July 2020",
    Description:
      "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
  },
];

const Index = () => {
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
              className="form-control rounded "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>

          <Button type="button" className=" col-2 btn-primary">
            search
          </Button>
        </Form>
        <div className="row">
          {dataCard.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 mb-5">
                <Card h-100>
                  <Card.Img variant="top" src={item.Image} />
                  <Card.Body>
                    <Card.Title className="title-card">{item.Title}</Card.Title>
                    <p className="date-card">
                      {item.Date} - {item.Author}{" "}
                    </p>
                    <Card.Text className="desc-card">
                      {item.Description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Index;
