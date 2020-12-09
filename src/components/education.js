import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Education = (props) => {
  const [show, setShow] = useState(false);

  const educationArray = props.value.map((obj) => {
    return (
      <div key={obj.id}>
        {props.showEditor ? (
          <FaTrash
            style={{ marginLeft: "5px", cursor: "pointer" }}
            size="13px"
            onClick={() => props.deleteState("education", obj.id)}
          />
        ) : null}
        <br />
        Year: {obj.year}
        <br />
        Place: {obj.place}
        <br />
        Title: {obj.title}
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
          title="Education"
          editState={props.editState}
        />
        <h1>
          Education{" "}
          {props.showEditor ? (
            <FaPlus
              style={{ cursor: "pointer" }}
              size="20px"
              onClick={toggleModal}
            />
          ) : null}
        </h1>
        {educationArray}
      </div>
    </>
  );
};

export default Education;
