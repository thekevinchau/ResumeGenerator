/*

  - Pass the state values down to HeaderInputs so that it can be altered by that component.

*/

import { useState } from "react"
import { HeaderSection } from "./components/HeaderSection";
import { EducationSection } from "./components/EducationSection";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({name: "John Doe", state: "DE", city: "Wilmington", email: "JohnDoe@gmail.com", number: "3027729066"});
  const [educationInfo, setEducationInfo] = useState({ degree: "Bachelors of Science in Computer Science, Cybersecurity Concentration", 
  college: "University of Delaware", 
  graduationDate: "December 2025", 
  location: "Newark, DE", 
  gpa: 3.73, 
  recognitions: ['Dean’s List: Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023', 'UD Presidential Scholarship'], 
  courseWork: 'Machine Organization and Assembly Language, Data Structures, Algorithms, Introduction to Software Engineering, Database Systems, Automata Theory, Computer Ethics'
})

  return <div className="w-screen h-screen flex justify-around items-start bg-slate-500">

    <div className="flex flex-col w-1/2 h-full mt-8 border bg-white">
    <HeaderSection name={personalInfo.name} state={personalInfo.state} city={personalInfo.city} email={personalInfo.email} number={personalInfo.number}></HeaderSection>
    <EducationSection coursework={educationInfo.courseWork} recognitions= {educationInfo.recognitions} gpa={educationInfo.gpa} degree={educationInfo.degree} college={educationInfo.college} location={educationInfo.location} expectedGrad={educationInfo.graduationDate}></EducationSection>
    </div>
  </div>
}