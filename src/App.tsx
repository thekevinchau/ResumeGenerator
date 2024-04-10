import { useState } from "react";
import { Resume } from "./components/Resume";
import { HeaderInputs } from "./components/HeaderInputs";





export default function App() {
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  return <div className="w-screen h-screen flex flex-col justify-center items-start bg-slate-500">
    <div>
    <HeaderInputs changeName={setName} changeCity={setCity} changeState={setState} changeEmail={setEmail} changeNumber={setNumber}></HeaderInputs>
    </div>
  </div>
}