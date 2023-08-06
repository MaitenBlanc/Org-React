import "./Team.css";
import Collaborator from "../Collaborator";
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.data;
    const { collaborators, deleteCollaborator, updateColor, like } = props;
    const obj = { backgroundColor: hexToRgba(colorPrimario, 0.6) };
    const styleTitulo = { borderColor: colorPrimario };

    return <>{collaborators.length > 0 &&
        <section section className="team" style={obj} >
            <input
                type="color"
                className="input-color"
                value={hexToRgba(colorPrimario, 0.6)}
                onChange={(event) => {
                    updateColor(event.target.value, id)
                }}

            />
            <h3 style={styleTitulo}>{titulo}</h3>
            <div className="collaborators">
                {collaborators.map((collaborator, index) => <Collaborator
                    data={collaborator}
                    key={index}
                    colorPrimario={colorPrimario}
                    deleteCollaborator={deleteCollaborator}
                    like={like}
                />)
                }
            </div>
        </section>
    } </>
};

export default Team;