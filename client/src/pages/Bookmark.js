import React, { useContext, useEffect } from "react";
import "./bookmark.css";
import { Card, Container } from "react-bootstrap";
import CardImage from "../assets/index-card-image.png";
import NavbarLogin from "../components/navbarLogin";
import { UserContext } from "../context/userContext";
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

const BookMark = () => {
  const [state, dispatch] = useContext(UserContext);
  let { data: bookmarks, refetch } = useQuery("bookmarkCache", async () => {
    const response = await API.get("/bookmarks");
    const responseBookmark = response.data.data.filter(
      (p) => p.user.id == state.user.id
    );
    return responseBookmark;
  });

  useEffect(() => {
    refetch();
  }, [state]);

  console.log(bookmarks);

  return (
    <div>
      <NavbarLogin />
      <Container className="mt-5">
        <div className="mb-5">
          <h1 className="bookmark">Bookmark</h1>
        </div>
        <div className="row">
          {bookmarks?.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 mb-5">
                <Card h-100>
                  <Card.Img
                    variant="top"
                    src={"http://localhost:5000/uploads/" + item?.journey.image}
                  />
                  <Card.Body>
                    <Card.Title className="title-card">
                      {item?.journey.title}
                    </Card.Title>
                    <p className="date-card">
                      {/* {item.Date} - {item.Author}{" "} */}
                    </p>
                    <Card.Text className="desc-card">
                      {item?.journey.descriptions}
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

export default BookMark;
