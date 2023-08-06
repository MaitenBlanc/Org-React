import "./Area.css"

const Area = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`

    const { type = "text" } = props

    const sendChange = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className={`area area-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={modifiedPlaceholder}
            required={props.required}
            value={props.value}
            onChange={sendChange}
            type={type}
        />
    </div>
};

export default Area;