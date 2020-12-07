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
        <Modal show={show} handleClose={toggleModal} />
        <h3>
          Interests{" "}
          {props.edit ? (
            <FaPencilAlt size="15px" onClick={toggleModal} />
          ) : null}
        </h3>
        {props.value}
      </div>
    </>
  );
};

export default Interests;
