import { useState } from "react";

import { FaPencilAlt } from "react-icons/fa";
import Modal from "./modal/modal";

const Education = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        <Modal show={show} handleClose={toggleModal} title="Education" />
        <h1>
          Education{" "}
          {props.edit ? (
            <FaPencilAlt size="20px" onClick={toggleModal} />
          ) : null}
        </h1>
        {props.value}
      </div>
    </>
  );
};

export default Education;
