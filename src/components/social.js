import { useState } from "react";

import { FaPencilAlt } from "react-icons/fa";
import Modal from "./modal/modal";

const Social = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  const socialArray = props.value;
  const output = socialArray.map((obj) => (
    <div key={obj.id}>
      {obj.website}:{obj.username}
    </div>
  ));

  return (
    <>
      <div>
        <Modal show={show} handleClose={toggleModal} />
        <h3>
          Socials{" "}
          {props.edit ? (
            <FaPencilAlt size="15px" onClick={toggleModal} />
          ) : null}
        </h3>
        {output}
      </div>
    </>
  );
};

export default Social;
