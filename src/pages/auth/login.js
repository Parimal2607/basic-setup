import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  FormGroup,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validatePassword } from "../../utils/validatePassword";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const viewPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("form value", values);
    localStorage.setItem("loginData", JSON.stringify(values));
    navigate("/dashboard");
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(5, "Minimum 5 characters required")
      .max(8, "Maximum 8 characters allowed")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Minimum 8 characters required")
      .max(20, "Maximum 20 characters allowed")
      .matches(
        /(?=^.{8,}$)(?=.*\d)(?=.*[~()_+='":;?/|.><,`}{!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Must contain at least one uppercase, lowercase, number and special character"
      ),
  });
  return (
    <Container fluid="lg">
      <Card className="main-div mb-0 highlight-card">
        <CardHeader>
          <CardTitle className="mb-0">Login</CardTitle>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <FormGroup className="form-group">
                <Label for="username">
                  Username <span className="required">*</span>
                </Label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="e.g. Akash"
                  className="form-control"
                  autoComplete="off"
                />
                <span className="error-msg">
                  <ErrorMessage name="username" />
                </span>
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="password">
                  Password <span className="required">*</span>
                </Label>
                <InputGroup>
                  <Field
                    type={visiblePassword ? "text" : "password"}
                    validate={validatePassword}
                    id="password"
                    name="password"
                    placeholder={
                      visiblePassword ? "e.g. Abcd@123" : "e.g. ********"
                    }
                    className="form-control"
                    autoComplete="off"
                  />
                  <InputGroupText>
                    {visiblePassword ? (
                      <FaEye
                        size="15"
                        className="pointer"
                        onClick={viewPassword}
                      />
                    ) : (
                      <FaEyeSlash
                        size="15"
                        className="pointer"
                        onClick={viewPassword}
                      />
                    )}
                  </InputGroupText>
                </InputGroup>
                <span className="error-msg">
                  <ErrorMessage name="password" />
                </span>
              </FormGroup>
              <Button type="submit" className="btn-cu-lg" color="primary">
                Submit
              </Button>
            </Form>
          </Formik>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
