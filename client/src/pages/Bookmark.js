import React, { useContext, useEffect } from "react";
import "./bookmark.css";
import { Container } from "react-bootstrap";
import NavbarLogin from "../components/navbarLogin";
import { UserContext } from "../context/userContext";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { BiBookmark } from "react-icons/bi";

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
      <Container className="mt-5 mb-5">
        <div className="mb-5">
          <h1 className="bookmark">Bookmark</h1>
        </div>
        <div className="container">
          {bookmarks?.length !== 0 ? (
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {bookmarks?.map((item) => (
                <div className="col pt-4">
                  <div className="card h-100">
                    <img
                      src={
                        "http://localhost:5000/uploads/" + item?.journey.image
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-10">
                          <h5 className="card-title">{item?.journey.title}</h5>
                        </div>
                        <div className="col-2">
                          <BiBookmark />
                        </div>
                      </div>

                      <p className="card-text">{item?.journey.descriptions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>You haven't bookmark any journal yet...</h1>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default BookMark;
