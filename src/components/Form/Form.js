import { useState } from 'react';
import './Form.css';
import TextArea from '../TextArea';
import OptionList from '../OptionList';
import Button from '../Button';

const Form = () => {

    const [nombre, updateNombre] = useState("");
    const [puesto, updatePuesto] = useState("");
    const [foto, updateFoto] = useState("");
    const [team, updateTeam] = useState("");

    const sendForm = (e) => {
        e.preventDefault()
        console.log("Manejar Envío")

        let sendData = {
            nombre,
            puesto,
            foto,
            team,
        }
        console.log(sendData)
    }

    return <section className='Form'>
        <form onSubmit={sendForm}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextArea titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} updateValue={updateNombre} />
            <TextArea titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} updateValue={updatePuesto} />
            <TextArea titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} updateValue={updateFoto} />
            <OptionList valor={team} updateTeam={updateTeam} />
            <Button>
                Crear
            </Button>
        </form>
    </section>
};

export default Form;