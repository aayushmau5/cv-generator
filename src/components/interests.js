import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Interests = (props) => {
  const [show, setShow] = useState(false);

  const interestsArray = props.value.map((obj) => {
    return (
      <div key={obj.id}>
        {obj.interest}
        {props.showEditor ? (
          <FaTrash
            style={{ marginLeft: "5px", cursor: "pointer" }}
            size="13px"
            onClick={() => props.deleteState("interests", obj.id)}
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
          title="Interests"
          editState={props.editState}
        />
        <h3>
          Interests{" "}
          {props.showEditor ? (
            <FaPlus
              style={{ cursor: "pointer" }}
              size="15px"
              onClick={toggleModal}
            />
          ) : null}
        </h3>
        {interestsArray}
      </div>
    </>
  );
};

export default Interests;
