import "./Team.css"

const Team = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.data

    const obj = {
        backgroundColor: colorSecundario
    }

    const styleTitulo = { borderColor: colorPrimario }

    return <section className="team" style={obj}>
        <h3 style={styleTitulo}>{titulo}</h3>
        <div className="collaborators">

        </div>
    </section>
}

export default Team;