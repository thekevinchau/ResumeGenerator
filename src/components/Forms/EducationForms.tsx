import { useState } from "react";

interface EducationProps {
    EducationInfo: {
        school: string,
        degree: string,
        gpa: number,
        awards: string[],
        coursework: string,
        location: string,
        expectedGrad: string,
    }
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    addEducation: () => void;
}

export default function EducationForms({EducationInfo, handleFormChange, addEducation}: EducationProps): JSX.Element {
    const [awardInput, setAwardInput] = useState<string>("");

    const handleAwardInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAwardInput(event.target.value);
    }

    const addAward = () => {
        EducationInfo.awards.push(awardInput);
        setAwardInput("");
    }

    return <div className="flex flex-col bg-orange-200">
        <label>School</label>
        <input onChange={handleFormChange} name="school" value={EducationInfo.school} required></input>
        <label>School Location</label>
        <input onChange={handleFormChange} name="location" value={EducationInfo.location} required></input>
        <label>Degree</label>
        <input onChange={handleFormChange} name="degree" value={EducationInfo.degree} required></input>
        <label>Expected Graduation</label>
        <input onChange={handleFormChange} name="expectedGrad" value={EducationInfo.expectedGrad} required></input>
        <label>GPA</label>
        <input onChange={handleFormChange} name="gpa" value={EducationInfo.gpa} required></input>
        <label>Awards</label>
        {EducationInfo.awards.map((award: string) => <li>{award}</li>)}
        <input onChange={handleAwardInput} value={awardInput} required></input>
        <button onClick={addAward} disabled={awardInput === ""}>Add Award</button>
        <label>Coursework</label>
        <input onChange={handleFormChange} name="coursework" value={EducationInfo.coursework} required></input>
        <button onClick={addEducation}>Submit Education</button>
    </div>
}