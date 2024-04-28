import { useState } from "react"
import HeaderForms from "./components/HeaderForms";
import HeaderSection from "./components/HeaderSection";


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
    
    }
)
  /*
  @Classification: Function
  @Purpose: React to changes from event firing based on HTML Input changes
  @Returns: Returns nothing
  @Explanation: Uses an event and destructures the name and value from the event, which correspond to which input element is being changed and its corresponding value.
  Then copies the headerInfo object and changes the key value pair corresponding to the name key and form value.
  */
  const handleHeaderInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setHeaderInfo({...headerInfo, [name]: value});
  }

  return <div className="w-screen h-screen flex justify-around bg-slate-500 font-serif">

    <div className="flex flex-col justify-around"> 
      <div className="border h-1/4 w-[20rem] flex flex-col align-center justify-center overflow-scroll overflow-x-scroll">
        <HeaderForms handleChange={handleHeaderInput} HeaderInfo={headerInfo}></HeaderForms>
      </div>
      


    </div>

  

    <div className="border w-1/2 h-screen bg-white flex flex-col items-center justify-between">
    <HeaderSection HeaderInfo={headerInfo}></HeaderSection>
    </div>
  </div>
}