import { FaPencilAlt } from "react-icons/fa";

const About = (props) => {
  return (
    <>
      <div>
        <h1>About {props.edit ? <FaPencilAlt size="20px" /> : null}</h1>
        {props.value}
      </div>
    </>
  );
};

export default About;
