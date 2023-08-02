import "./OptionList.css";

const OptionList = () => {

    const teams = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ]

    return <div className="options-list">
        <label>Equipos</label>
        <select>
            {teams.map((team, index) => <option key={index}>{team}</option>)}
        </select>
    </div>
};

export default OptionList;