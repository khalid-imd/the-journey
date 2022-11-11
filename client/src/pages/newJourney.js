import React, { useState } from "react";
import {
  Form,
  Button,
  FloatingLabel,
  FormLabel,
  Container,
  Alert,
} from "react-bootstrap";
import { useMutation } from "react-query";
import NavbarLogin from "../components/navbarLogin";
import { API } from "../config/api";
import "./newJourney.css";

function Editor() {
  const [message, setMessage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
    descriptions: "",
    image: "",
  });

  const { title, descriptions, image } = form;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  console.log(form);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      console.log(formData);
      formData.set("title", form.title);
      formData.set("image", form.image[0], form.image[0]?.name);
      formData.set("descriptions", form.descriptions);

      const data = await API.post("/journey", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      console.log(data);

      const alert = <Alert variant="success">Journey added</Alert>;
      setMessage(alert);
      console.log("", data);
    } catch (error) {
      const alert = <Alert variant="danger">Failed add journey</Alert>;
    }
  });

  return (
    <div>
      <NavbarLogin />
      <Container className="mx-auto mt-5 w-75 row">
        <h2 className="title col-12 title">New Journey</h2>
        <Form className="mt-5 row">
          <div className="row mb-4">
            <FormLabel className="journey-title"> Title </FormLabel>
            <div className="col-lg-9 order-lg-1 order-1 pb-3">
              <Form.Control
                type="text"
                placeholder="Add your journey title"
                name="title"
                value={title}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-3 order-lg-1 order-2 pb-3">
              <input
                type="file"
                name="image"
                onChange={handleOnChange}
                class="form-control input-group-text w-100 rounded-end"
                id="inputGroupFile01"
              />
            </div>
          </div>
          <div className="col-lg-12 order-lg-2 order-3 pb-5">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Journey Descriptions"
            >
              <Form.Control
                type="textarea"
                style={{ height: "300px" }}
                name="descriptions"
                value={descriptions}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <Button
              onClick={(e) => handleSubmit.mutate(e)}
              type="submit"
              className="col-lg-3 offset-lg-9 order-lg-3 order-4 mb-5 mt-5 text-decoration-none"
            >
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Editor;
