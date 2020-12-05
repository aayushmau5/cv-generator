import { FaPencilAlt } from "react-icons/fa";

const Name = (props) => {
    return (
    <h1 style={{textDecoration: 'none'}}>{props.value} {props.edit ? <FaPencilAlt size="20px" /> : null}</h1>
    )
}

export default Name;