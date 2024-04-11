import { useState } from "react"
import { HeaderSection } from "./components/HeaderSection";
import { HeaderForms } from "./components/HeaderForms";
import { EducationSection } from "./components/EducationSection";
import EducationForms from "./components/EducationForms";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState(
    {
    name: "", 
    state: "", 
    city: "", 
    email: "", 
    number: ""
  });
  /*
  @brief: A callback function that changes personalInfo state values based on input from HeaderForm.tsx
  @param: An event that fires upon key inputs
  @functionality: Consumes an event, retrieves the name and value fields from the event, and alters the value at the key "name" inside the personalInfo object.
  @return: Returns nothing as it is a state setter.
  */
  function handlePersonalInfoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target; //destructures the name and value field inside the event.target (in our case, the input element);
    setPersonalInfo({ ...personalInfo, [name]: value }); //takes the name field which corresponds to the object key, and sets it to the value that is inside the textbox.
  }

  const [educationInfo, setEducationInfo] = useState({ 
    degree: "", 
    college: "", 
    expectedGrad: "", 
    location: "", 
    gpa: 0.0, 
    recognitions: ['Dean’s List: Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023', 'UD Presidential Scholarship'], 
    courseWork: ''
  })
  const [educationArray, setEducationArray] = useState<object[]>([]);

  const addEducation = () => {
    //empty out the educationInfo upon submission
    const resetSubmission = {degree: "", college: "", expectedGrad: "", location: "", gpa: 0.0, recognitions: ['Dean’s List: Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023', 'UD Presidential Scholarship'], courseWork: ''}
    setEducationArray([...educationArray, educationInfo])
    console.log(educationArray);
    setEducationInfo(resetSubmission);
  }
  /*
  @brief: A callback function that changes educationInfo fields based on input from EducationForm.tsx
  @param: Event that fires upon key inputs to input box
  @functionality: Consumes an event and destructures the name and value attributes from target event (in our case, the input element). Name is the key, value gets changed inside the object.
  @return: Returns nothing. Is a state setter. 
  */
  const handleEducationInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEducationInfo({...educationInfo, [name]: value})
  }
  

  return <div className="w-screen h-screen flex justify-around items-start bg-slate-500 font-serif">

    <div className="w-1/2 h-full flex flex-col border">
      <HeaderForms handleFormInput={handlePersonalInfoChange} headerInfo={personalInfo}></HeaderForms>
      <EducationForms handleSubmission={addEducation} handleInput={handleEducationInfo} educationInfo={educationInfo}></EducationForms>
    </div>
    <div className="flex flex-col w-1/2 h-full  border bg-white">

      <div className="ml-10 mr-10">
        <HeaderSection name={personalInfo.name} state={personalInfo.state} city={personalInfo.city} email={personalInfo.email} number={personalInfo.number}></HeaderSection>
        <EducationSection educationInfo={educationInfo}></EducationSection>
      </div>
    </div>
  </div>
}