import "./TextArea.css"

const TextArea = (props) => {
    const modifiedPlaceholder = `${props.placeholder}..`

    const sendChange = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className="text-area">
        <label>{props.titulo}</label>
        <input placeholder={modifiedPlaceholder} required={props.required} value={props.value} onChange={sendChange} />
    </div>
};

export default TextArea;