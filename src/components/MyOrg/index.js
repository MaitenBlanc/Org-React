import { useState } from "react";
import "./MyOrg.css";

const MyOrg = (props) => {

    console.log(props)

    // const [show, updateShow] = useState(true)

    // const SendClick = () => {
    //     console.log("Mostrar/Ocultar elemento")
    //     updateShow(!show)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeShow} />
    </section>
};

export default MyOrg;