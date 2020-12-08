import { useState } from "react";

import { FaPencilAlt } from "react-icons/fa";
import Modal from "./modal/modal";

const Interests = (props) => {
  const [show, setShow] = useState(false);

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
            <FaPencilAlt size="15px" onClick={toggleModal} />
          ) : null}
        </h3>
        {props.value}
      </div>
    </>
  );
};

export default Interests;
