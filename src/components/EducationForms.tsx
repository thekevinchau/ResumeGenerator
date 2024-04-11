import React from "react";

interface EducationFormProps{
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmission: () => void;
    educationInfo: {
        degree: string,
        college: string,
        expectedGrad: string,
        location: string,
        gpa: number,
        recognitions: string[],
        courseWork: string,
    }
}


export default function EducationForms({handleInput, educationInfo, handleSubmission}: EducationFormProps){

    //Ues the handleSubmission callback but prevents the default so page doesn't reload
    function handleButtonClick(event: React.ChangeEvent<SubmitEventInit>){
        event.preventDefault();
        handleSubmission();

    }

    return <form className="flex flex-col" onSubmit={handleButtonClick}>
        <label>Degree</label>
        <input name="degree" value={educationInfo.degree} onChange={handleInput} required></input>

        <label>College</label>
        <input name="college" value={educationInfo.college} onChange={handleInput} required></input>

        <label>Expected Graduation</label>
        <input name="expectedGrad" value={educationInfo.expectedGrad} onChange={handleInput} required></input>

        <label>School Location</label>
        <input name="location" value={educationInfo.location} onChange={handleInput} required></input>

        <label>GPA</label>
        <input name="gpa" value={educationInfo.gpa} onChange={handleInput}></input>

        <label>Recognitions/Awards</label>
        <input name="recognitions" value={educationInfo.recognitions} onChange={handleInput}></input>

        <label>Coursework (Enter as comma separated)</label>
        <input name="courseWork" value={educationInfo.courseWork} onChange={handleInput}></input>
        <button type="submit">Button</button>


    </form>
}