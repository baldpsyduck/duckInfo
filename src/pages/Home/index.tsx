import styled from "@emotion/styled";
import axios from "axios";
import { useEffect } from "react";
import "./Home.css";
import RecentNews from "./RecentNews";

export default function Home() {
  useEffect(() => {
    axios
      .post("/test/student/login", {
        sname: "cyw",
        spassword: "111",
      })
      .then((e) => {
        console.log("acc",e);
      })
      .catch((e) => {
        console.log("err",e);
      });
  }, []);
  return (
    <Container className="home">
      <RecentNews />
      {() => {
        return <div />;
      }}
    </Container>
  );
}

const Container = styled.div``;
