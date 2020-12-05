import { FaPencilAlt } from "react-icons/fa";

const Skills = (props) => {
  return (
    <>
      <div>
        <h1>Skills {props.edit ? <FaPencilAlt size="20px" /> : null}</h1>
        {props.value}
      </div>
    </>
  );
};

export default Skills;
