import * as React from "react";
import styled from "styled-components";

interface ITask {
  name: string;
  done: boolean;
}

const Card = (props: ITask): JSX.Element => {
  const { name, done } = props;

  const Container = styled.div`
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: auto;
    grid-template-areas: "btn title title" " main main  ." "start end .";
    border: 1px solid #282828;
    padding: 10px;
    margin-top: 1.5rem;
    border-radius: 10px;
  `;

  return (
    <Container>
      <div
        style={{
          gridArea: "btn",
          backgroundColor: "#007bff",
          height: "50px",
          padding: "10px",
          width: "auto",
        }}
      >
        <div>
          <div
            style={{
              gridArea: "btn-a",
              backgroundColor: "#007b00",
              height: "50px",
              padding: "10px",
              width: "auto",
            }}
          >
            btn1
          </div>
          <div
            style={{
              gridArea: "btn-a",
              backgroundColor: "#007b00",
              height: "50px",
              padding: "10px",
              width: "auto",
            }}
          >
            btn2
          </div>
        </div>
      </div>
      <div
        style={{
          gridArea: "title",
          border: "1px solid red",
          backgroundColor: "#007bff",
          height: "50px",
          padding: "10px",
          width: "auto",
        }}
      ></div>
    </Container>
  );
};
/* 
<div key={index} className="card card-body mt-5">
              {" "}
              <h2
                style={{
                  textDecoration: t.done ? "line-through" : undefined,
                }}
              >
                {t.name}
              </h2>
              <div>
                <Button color="secondary" onClick={() => toggleDone(index)}>
                  {t.done ? "✓" : "✗"}
                </Button>
                <Button color="danger" onClick={() => deleteTask(index)}>
                  🗑
                </Button>
              </div>
            </div> */
export default Card;
