import { FaPencilAlt } from "react-icons/fa";

const Education = (props) => {
  return (
    <>
      <div>
        <h1>Education {props.edit ? <FaPencilAlt size="20px" /> : null}</h1>
        {props.value}
      </div>
    </>
  );
};

export default Education;
