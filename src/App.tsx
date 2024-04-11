/*

  - Pass the state values down to HeaderInputs so that it can be altered by that component.

*/

import { useState } from "react"
import { HeaderSection } from "./components/HeaderSection";
import { EducationSection } from "./components/EducationSection";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({name: "John Doe", state: "DE", city: "Wilmington", email: "JohnDoe@gmail.com", number: "3027729066"});
  const [educationInfo, setEducationInfo] = useState({ degree: "Computer Science", college: "University of Delaware", graduationDate: "December 2025", location: "Newark, DE"})

  return <div className="w-screen h-screen flex justify-around items-start bg-slate-500">

    <div className="flex flex-col">
    <HeaderSection name={personalInfo.name} state={personalInfo.state} city={personalInfo.city} email={personalInfo.email} number={personalInfo.number}></HeaderSection>
    <EducationSection degree={educationInfo.degree} college={educationInfo.college} location={educationInfo.location} expectedGrad={educationInfo.graduationDate}></EducationSection>
    </div>
  </div>
}