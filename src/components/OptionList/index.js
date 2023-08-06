import "./OptionList.css";

const OptionList = (props) => {
    const sendChange = (e) => {
        console.log("Cambio", e.target.value)
        props.updateTeam(e.target.value);
    }

    return <div className="options-list">
        <label>Equipos</label>
        <select value={props.valor} onChange={sendChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.teams?.map((team, index) => <option key={index}>{team}</option>)}
        </select>
    </div>
};

export default OptionList;