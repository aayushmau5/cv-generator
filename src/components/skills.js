import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Skills = (props) => {
  const [show, setShow] = useState(false);

  const skillsArray = props.value.map((obj) => {
    return (
      <div key={obj.id}>
        {obj.skill}
        {props.showEditor ? (
          <FaTrash
            style={{ marginLeft: "5px", cursor: "pointer" }}
            size="13px"
            onClick={() => props.deleteState("skills", obj.id)}
          />
        ) : null}
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
          title="Skills"
          editState={props.editState}
        />
        <h1>
          Skills{" "}
          {props.showEditor ? (
            <FaPlus
              style={{ cursor: "pointer" }}
              size="20px"
              onClick={toggleModal}
            />
          ) : null}
        </h1>
        {skillsArray}
      </div>
    </>
  );
};

export default Skills;
