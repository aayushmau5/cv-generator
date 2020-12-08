import { useState } from "react";

import { FaPencilAlt } from "react-icons/fa";
import Modal from "./modal/modal";

const Contacts = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  const contactsArray = props.value;
  const output = contactsArray.map((obj) => (
    <div key={obj.id}>
      {obj.website}:{obj.username}
    </div>
  ));

  return (
    <>
      <Modal show={show} handleClose={toggleModal} title="Contacts" />
      <h3>
        Contacts{" "}
        {props.edit ? <FaPencilAlt size="15px" onClick={toggleModal} /> : null}
      </h3>
      {output}
    </>
  );
};

export default Contacts;
