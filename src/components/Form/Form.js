import { useState } from 'react';
import './Form.css';
import Area from '../Area';
import OptionList from '../OptionList';
import Button from '../Button';

const Form = (props) => {

    const [nombre, updateNombre] = useState("");
    const [puesto, updatePuesto] = useState("");
    const [foto, updateFoto] = useState("");
    const [team, updateTeam] = useState("");

    const [titulo, updateTitulo] = useState("");
    const [color, updateColor] = useState("");

    const { registerCollaborator, createTeam } = props;

    const sendForm = (e) => {
        e.preventDefault()
        console.log("Manejar Envío")

        let sendData = {
            nombre,
            puesto,
            foto,
            team,
        };
        props.registerCollaborator(sendData);
    }

    const sendNewTeam = (e) => {
        e.preventDefault();
        createTeam({ titulo, colorPrimario: color });
    };

    return <section className='Form'>
        <form onSubmit={sendForm}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Area
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                updateValue={updateNombre} />
            <Area
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                updateValue={updatePuesto} />
            <Area
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                updateValue={updateFoto} />
            <OptionList valor={team} updateTeam={updateTeam} teams={props.teams} />
            <Button>
                Crear
            </Button>
        </form>

        <form onSubmit={sendNewTeam}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Area
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                updateValue={updateTitulo}
            />
            <Area
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                updateValue={updateColor}
                type="color"
            />
            <Button>Registrar equipo</Button>
        </form>
    </section>
};

export default Form;