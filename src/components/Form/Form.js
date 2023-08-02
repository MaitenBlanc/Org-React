import './Form.css';
import TextArea from '../TextArea';
import OptionList from '../OptionList';
import Button from '../Button';

const Form = () => {

    const sendForm = (e) => {
        e.preventDefault()
        console.log("Manejar Envío", e)
    }

    return <section className='Form'>
        <form onSubmit={sendForm}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextArea titulo="Nombre" placeholder="Ingresar nombre" />
            <TextArea titulo="Puesto" placeholder="Ingresar puesto" />
            <TextArea titulo="Foto" placeholder="Ingresar enlace de foto" />
            <OptionList />
            <Button>
                Crear
            </Button>
        </form>
    </section>
};

export default Form;