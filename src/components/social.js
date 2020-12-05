import { FaPencilAlt } from "react-icons/fa";

const Social = (props) => {
  const socialArray = props.value;
  const output = socialArray.map((obj) => (
    <div key={obj.id}>
      {obj.website}:{obj.username}
    </div>
  ));

  return (
    <>
      <div>
        <h3>Socials {props.edit ? <FaPencilAlt size="15px" /> : null}</h3>
        {output}
      </div>
    </>
  );
};

export default Social;
