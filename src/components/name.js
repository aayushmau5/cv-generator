import { useState } from "react";

import { FaPencilAlt } from "react-icons/fa";
import Modal from "./modal/modal";

const Name = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Modal show={show} handleClose={toggleModal} title="Name" editState={props.editState} value={props.value} />
      <h1 style={{ textDecoration: "none" }}>
        {props.value}{" "}
        {props.showEditor ? <FaPencilAlt size="20px" onClick={toggleModal} /> : null}
      </h1>
    </>
  );
};

export default Name;
