import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";

function Dashboard() {
  let authenticated;
  const Username = localStorage.getItem("loginData");
  if (Username) {
    authenticated = JSON.parse(Username);
  }
  useEffect(() => {
    toast.success(`Welcome ${authenticated.username}`)
  }, [authenticated.username]);
  return (
    <>
      <Helmet>
        <title>React - Dashboard</title>
      </Helmet>
      <Container fluid="lg">
        <div className="text-center">
          <h2 className="title mb-3">
            Hi <span>{authenticated.username}</span> ,
          </h2>
          <h3 className="mb-0 title">Welcome to Demo project.</h3>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
