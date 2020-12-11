import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Education = (props) => {
  const [show, setShow] = useState(false);

  const educationArray = props.value.map((obj) => {
    return (
      <div className="education" key={obj.id}>
        <div className="info">
          <span className="degree">{obj.title}</span>
          <span className="place">{obj.place}</span>
        </div>
        <div className="year-container">
          <span className="year">{obj.year}</span>
          {props.showEditor ? (
            <FaTrash
              style={{ marginLeft: "5px", cursor: "pointer" }}
              size="13px"
              onClick={() => props.deleteState("education", obj.id)}
            />
          ) : null}
        </div>
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
        <div className="education-container">{educationArray}</div>
      </div>
    </>
  );
};

export default Education;
