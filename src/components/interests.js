import { FaPencilAlt } from "react-icons/fa";

const Interests = (props) => {
  return (
    <>
      <div>
        <h3>Interests {props.edit ? <FaPencilAlt size="15px" /> : null}</h3>
        {props.value}
      </div>
    </>
  );
};

export default Interests;
