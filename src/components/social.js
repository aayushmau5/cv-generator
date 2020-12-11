import { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "./modal/modal";

const Social = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  const socialArray = props.value;
  const output = socialArray.map((obj) => (
    <div key={obj.id}>
      <strong>{obj.website}: </strong>{obj.username}
      {props.showEditor ? (
        <FaTrash
          style={{ marginLeft: "5px", cursor: "pointer" }}
          size="13px"
          onClick={() => props.deleteState("social", obj.id)}
        />
      ) : null}
    </div>
  ));

  return (
    <>
      <div>
        <Modal
          show={show}
          handleClose={toggleModal}
          title="Socials"
          editState={props.editState}
        />
        <h3>
          Socials{" "}
          {props.showEditor ? (
            <FaPlus
              style={{ cursor: "pointer" }}
              size="15px"
              onClick={toggleModal}
            />
          ) : null}
        </h3>
        {output}
      </div>
    </>
  );
};

export default Social;
