import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Contacts = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  const contactsArray = props.value;
  const output = contactsArray.map((obj) => (
    <div key={obj.id}>
      {obj.place}:{obj.value}{" "}
      {props.showEditor ? (
        <FaTrash
          style={{ marginLeft: "5px", cursor: "pointer" }}
          size="13px"
          onClick={() => props.deleteState("contacts", obj.id)}
        />
      ) : null}
    </div>
  ));

  return (
    <>
      <Modal
        show={show}
        handleClose={toggleModal}
        title="Contacts"
        editState={props.editState}
      />
      <h3>
        Contacts{" "}
        {props.showEditor ? (
          <FaPlus
            style={{ cursor: "pointer" }}
            size="15px"
            onClick={toggleModal}
          />
        ) : null}
      </h3>
      {output}
    </>
  );
};

export default Contacts;
