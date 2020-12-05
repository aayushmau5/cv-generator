import { FaPencilAlt } from "react-icons/fa";

const Achievements = (props) => {
  return (
    <>
      <div>
        <h1>Achievements {props.edit ? <FaPencilAlt size="20px" /> : null}</h1>
        {props.value}
      </div>
    </>
  );
};

export default Achievements;
