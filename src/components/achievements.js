import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Achievements = (props) => {
  const [show, setShow] = useState(false);

  const achievementsArray = props.value.map((obj) => {
    return (
      <div className="achievement" key={obj.id}>
        <div className="info">
          <span className="position">{obj.position}</span>
          <span className="company">{obj.company}</span>
          <span className="summary">{obj.summary}</span>
        </div>
        <div className="year-container">
          <span className="year">{obj.year}</span>
          {props.showEditor ? (
            <FaTrash
              style={{ marginLeft: "5px", cursor: "pointer" }}
              size="13px"
              onClick={() => props.deleteState("achievements", obj.id)}
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
        <div className="achievements">{achievementsArray}</div>
      </div>
    </>
  );
};

export default Achievements;
