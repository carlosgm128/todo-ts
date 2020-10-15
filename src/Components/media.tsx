import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  fas,
  faFileExcel,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
library.add(fas);
/* 
const styles = {
  center: {
  },
  icon: {
    fontSize: "35px",
    color: "#777",
  },
  a: {
    display: "flex",
    background: "transparent",
    width: "75px",
    height: "75px",
    margin: "0 15px",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow:
      "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)",
  },
}; */
const Center = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const A = styled.a`
  display: flex;
  background: transparent;
  width: 75px;
  height: 75px;
  margin: 0 15px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0, 0);
  transition: transform 0.5s;
  &:link {
    text-decoration: none;
  }
  &:hover {
    transform: translateY(2px);
  }
`;
const I = styled.i`
  font-size: 35px;
  color: #777;
  &:hover {
    color: ${(props) => props.color || "#777"};
  }
`;
function media() {
  return (
    <Center>
      <A href="/" target="_blank">
        <I color="#FF0000" className="fab fa-youtube"></I>
      </A>
      <A href="/" target="_blank">
        <I color="#4267B2" className="fab fa-facebook-square"></I>
      </A>
      <A href="https://github.com/carlosgm128" target="_blank">
        <I color="#282828" className="fab fa-github-alt"></I>
      </A>
    </Center>
  );
}

export default media;
