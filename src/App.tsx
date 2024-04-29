import { useState } from "react"
import HeaderForms from "./components/Forms/HeaderForms";
import HeaderSection from "./components/Sections/HeaderSection";
import EducationForms from "./components/Forms/EducationForms";
import EducationSection from "./components/Sections/EducationSection";


interface HeaderInfo {
  name: string,
  email: string,
  cell: string,
  city: string,
  state: string,
}

interface EducationInfo {
  school: string,
  degree: string,
  gpa: number,
  awards: string[],
  coursework: string,
  location: string,
  expectedGrad: string,
}

export default function App() {

  //Header state getters and setters
  const [headerInfo, setHeaderInfo] = useState<HeaderInfo>(
    {
      name: "",
      email: "",
      cell: "",
      city: "",
      state: "",
    }
  )
    //Education state setters and getters
  const [educationInfo, setEducationInfo] = useState<EducationInfo>(
    {
      school: "",
      degree: "",
      gpa: 0,
      awards: [],
      coursework: "",
      location: "",
      expectedGrad: ""
    }
)
  //Store Education into array in the event that there are multiple educations
  const [educationArray, setEducationArray] = useState<EducationInfo[]>([]);


  /*
  @Classification: Function
  @Purpose: Reacts to changes to the object's key value pair based on HTML Input element.
  @Returns: Returns nothing.
  @Explanation: Uses an event and destructures the name and value from the event, which correspond to which input element is being changed and its corresponding value.
  Then copies the headerInfo object and changes the key value pair corresponding to the name key and form value.
  */
  const handleHeaderInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setHeaderInfo({...headerInfo, [name]: value});
  }


  /*
  @Classification: Function
  @Purpose: React to changes from event firing based on HTML Input changes
  @Returns: Returns nothing
  @Explanation: Uses an event and destructures the name and value from the event, which correspond to which input element is being changed and its corresponding value.
  Then copies the headerInfo object and changes the key value pair corresponding to the name key and form value.
  */
  const handleEducationInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = event.target;
  setEducationInfo({...educationInfo, [name]: value});
}

  /*
  @Classification: Function
  @Purpose: Used as a button handler that resets the education fields and adds an education to the existing array.
  @Returns: Returns nothing
  @Explanation: Creates an education object that has all empty fields and upon submission, adds the current Education fields into the array and then resets all fields to empty.
  */
  const addEducation = () => {
    //Reset education on adding education
    const emptyEducation = {
      school: "",
      degree: "",
      gpa: 0,
      awards: [],
      coursework: "",
      location: "",
      expectedGrad: "",
    }
    setEducationArray([...educationArray, educationInfo]);
    setEducationInfo(emptyEducation);
  }

  return <div className="w-screen h-screen flex justify-around bg-slate-500 font-serif">

    <div className="flex flex-col justify-around"> 

      <div className="border h-1/4 w-[20rem] flex flex-col align-center justify-center overflow-scroll overflow-x-scroll">
        <HeaderForms handleChange={handleHeaderInput} HeaderInfo={headerInfo}></HeaderForms>
      </div>

          
      <div className="border h-1/2 w-[20rem] flex flex-col align-center justify-center overflow-scroll overflow-x-scroll">
        <EducationForms handleFormChange={handleEducationInput} addEducation={addEducation} EducationInfo={educationInfo}></EducationForms>
      </div>
      


    </div>

  

    <div className="border w-1/2 h-screen bg-white flex flex-col items-center shadow-md ml-2 mr-2">

      <HeaderSection HeaderInfo={headerInfo}></HeaderSection>


      <div className=" w-full h-1/4">
      <EducationSection EducationInfo={educationInfo}></EducationSection>
      {educationArray.map(education => <EducationSection EducationInfo={education}></EducationSection>)}
      </div>
    </div>
  </div>
}