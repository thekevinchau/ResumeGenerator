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

export default function App() {
  const [headerInfo, setHeaderInfo] = useState<HeaderInfo>(
    {
      name: "",
      email: "",
      cell: "",
      city: "",
      state: "",
    }
  )

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