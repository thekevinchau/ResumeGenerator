/*

  - Pass the state values down to HeaderInputs so that it can be altered by that component.

*/

import { useState } from "react"
import { HeaderSection } from "./components/HeaderSection";
import { HeaderForms } from "./components/HeaderForms";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({name: "John Doe", state: "DE", city: "Wilmington", email: "JohnDoe@gmail.com", number: "3027729066"});

  function handlePersonalInfoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  return <div className="w-screen h-screen flex justify-around items-start bg-slate-500">

    <div className="flex flex-col w-1/2 h-full mt-8 border bg-white">

      <div className="ml-11 mr-11">
        <HeaderSection name={personalInfo.name} state={personalInfo.state} city={personalInfo.city} email={personalInfo.email} number={personalInfo.number}></HeaderSection>
      </div>
    </div>
    <HeaderForms handleFormInput={handlePersonalInfoChange} headerInfo={personalInfo}></HeaderForms>
  </div>
}