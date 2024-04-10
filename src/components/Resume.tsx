import { useState } from "react";
import { HeaderInputs } from "./HeaderInputs";


export function Resume():JSX.Element {
    const [name, setName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");

    return <div>
        <HeaderInputs changeName={setName} changeCity={setCity} changeState={setState} changeEmail={setEmail} changeNumber={setNumber}></HeaderInputs>


    </div>
}