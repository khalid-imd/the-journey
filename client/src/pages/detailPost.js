import React from "react";
import { Container } from "react-bootstrap";
import Image from "../assets/detail-photo.png";
import "./detailPost.css";

const dataDetail = [
  {
    Image: Image,
    Author: "Cipto",
    Title: "Bersemayam di tanah Dewata",
    Date: "29 July 2020",
    Description:
      "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
  },
];

const Detail = () => {
  return (
    <div>
      {dataDetail.map((item) => {
        return (
          <Container>
            <div className="mb-4">
              <div className="row">
                <h1 className="col-9 title">{item.Title}</h1>
                <h2 className="col-3 author">{item.Author}</h2>
              </div>
              <div>
                <h4 className="date">{item.Date}</h4>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-5">
              <img src={Image} width="75%" alt="" />
            </div>
            <div>
              <div>
                <h2>ini sub title</h2>
              </div>
              <div className="justify">
                ini isi journal, Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Aliquid suscipit dolorum animi quisquam totam
                eos, veniam reiciendis est dignissimos! Cupiditate maiores
                earum, natus eaque, id facere, consequatur nesciunt placeat ad
                rerum eligendi! Quis eos adipisci beatae rerum exercitationem
                aspernatur soluta vel libero iusto deserunt a quam consectetur
                deleniti ex officiis dolorem, facere quibusdam dolor quos
                possimus numquam nam tenetur consequuntur? Sint in rem impedit
                magni quisquam commodi, vero possimus odit earum eligendi
                corporis quos provident, nobis maiores nam accusamus aperiam
                enim magnam animi quibusdam consectetur? Nulla, commodi!
                Provident, animi! Possimus blanditiis incidunt molestiae sed
                eius? Corporis laboriosam corrupti unde recusandae.
              </div>
            </div>
          </Container>
        );
      })}
    </div>
  );
};

export default Detail;
