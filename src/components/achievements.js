import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Achievements = (props) => {
  const [show, setShow] = useState(false);

  const achievementsArray = props.value.map((obj) => {
    return (
      <div key={obj.id}>
        {props.showEditor ? (
          <FaTrash
            style={{ marginLeft: "5px", cursor: "pointer" }}
            size="13px"
            onClick={() => props.deleteState("achievements", obj.id)}
          />
        ) : null}
        <br />
        Year: {obj.year}
        <br />
        Company: {obj.company}
        <br />
        Position: {obj.position}
        <br />
        Summary: {obj.summary}
        <br />
        <br />
      </div>
    );
  });

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        <Modal
          show={show}
          handleClose={toggleModal}
          title="Achievements"
          editState={props.editState}
        />
        <h1>
          Achievements{" "}
          {props.showEditor ? (
            <FaPlus
              style={{ cursor: "pointer" }}
              size="20px"
              onClick={toggleModal}
            />
          ) : null}
        </h1>
        {achievementsArray}
      </div>
    </>
  );
};

export default Achievements;
