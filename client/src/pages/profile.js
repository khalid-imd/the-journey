import React, { useContext, useEffect } from "react";
import "./profile.css";
import { Card, Container } from "react-bootstrap";
import CardImage from "../assets/index-card-image.png";
import UserIcon from "../assets/profile-user.png";
import NavbarLogin from "../components/navbarLogin";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { BiBookmark } from "react-icons/bi";

const Profile = () => {
  const [state, dispatch] = useContext(UserContext);
  let { data: journeys, refetch } = useQuery(
    "journeysProfileCache",
    async () => {
      const response = await API.get("/journeys");
      const responseProfile = response.data.data.filter(
        (p) => p.user.id == state.user.id
      );
      return responseProfile;
    }
  );

  useEffect(() => {
    refetch();
  }, [state]);

  console.log(state);
  return (
    <div>
      <NavbarLogin />
      <Container className="mt-5">
        <div className="mb-5">
          <h1 className="bookmark">Profile</h1>
        </div>
        <div className="mb-5">
          <div className="d-flex justify-content-center mb-2">
            <img width="100px" src={UserIcon} alt="" />
          </div>
          <div className="d-flex justify-content-center name-user">
            {" "}
            {state?.user?.fullname}{" "}
          </div>
          <div className="d-flex justify-content-center email-user">
            {state?.user?.email}
          </div>
        </div>
        <div className="container">
          {journeys?.length !== 0 ? (
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {journeys?.map((item) => (
                <div className="col pt-4">
                  <div className="card h-100">
                    <img src={item?.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-10">
                          <h5 className="card-title">{item?.title}</h5>
                        </div>
                        <div className="col-2">
                          <BiBookmark />
                        </div>
                      </div>

                      <p className="card-text">{item?.descriptions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>You haven't journal yet...</h1>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
