import "./Collaborator.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborator = (props) => {
    const { nombre, puesto, foto, team, id, fav } = props.data;
    const { colorPrimario, deleteCollaborator, like } = props;
    return <div className="collaborator">
        <AiFillCloseCircle className="delete" onClick={() => deleteCollaborator(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
};

export default Collaborator;