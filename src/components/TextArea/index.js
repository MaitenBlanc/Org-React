import "./TextArea.css"

const TextArea = (props) => {
    console.log("Datos: " + props.titulo)
    const modifiedPlaceholder = `${props.placeholder}..`
    return <div className="text-area">
        <label>{props.titulo}</label>
        <input placeholder={modifiedPlaceholder} />
    </div>
};

export default TextArea;