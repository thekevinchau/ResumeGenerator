import { useState } from "react"
import { HeaderSection } from "./components/HeaderSection";
import { HeaderForms } from "./components/HeaderForms";
import { EducationSection } from "./components/EducationSection";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(
    {name: "", 
    state: "", 
    city: "", 
    email: "", 
    number: ""});
  /*
  @brief: A callback function that changes personalInfo state values based on input from HeaderForm.tsx
  @param: An event that fires upon key inputs
  @functionality: Consumes an event, retrieves the name and value fields from the event, and alters the value at the key "name" inside the personalInfo object.
  @return: Returns nothing as it is a state setter.
  */
  function handlePersonalInfoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  const [educationInfo, setEducationInfo] = useState({ 
    degree: "Bachelors of Science in Computer Science, Cybersecurity Concentration", 
    college: "University of Delaware", 
    graduationDate: "December 2025", 
    location: "Newark, DE", 
    gpa: 3.73, 
    recognitions: ['Dean’s List: Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023', 'UD Presidential Scholarship'], 
    courseWork: 'Machine Organization and Assembly Language, Data Structures, Algorithms, Introduction to Software Engineering, Database Systems, Automata Theory, Computer Ethics'
  })
  

  return <div className="w-screen h-screen flex justify-around items-start bg-slate-500 font-serif">
    <HeaderForms handleFormInput={handlePersonalInfoChange} headerInfo={personalInfo}></HeaderForms>
    <div className="flex flex-col w-1/2 h-full  border bg-white">

      <div className="ml-10 mr-10">
        <HeaderSection name={personalInfo.name} state={personalInfo.state} city={personalInfo.city} email={personalInfo.email} number={personalInfo.number}></HeaderSection>
        <EducationSection coursework={educationInfo.courseWork} recognitions= {educationInfo.recognitions} gpa={educationInfo.gpa} degree={educationInfo.degree} college={educationInfo.college} location={educationInfo.location} expectedGrad={educationInfo.graduationDate}></EducationSection>
      </div>
    </div>
  </div>
}