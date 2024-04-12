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
        <input name="degree" value={educationInfo.degree} onChange={handleInput} required placeholder="High School Degree, College Degree, GED, etc."></input>

        <label>Institute Name</label>
        <input name="college" value={educationInfo.college} onChange={handleInput} required placeholder="ie. University of Delaware, Concord High School"></input>

        <label>Expected Graduation</label>
        <input name="expectedGrad" value={educationInfo.expectedGrad} onChange={handleInput} required placeholder="Graduation or Expected Graduation Date"></input>

        <label>School Location</label>
        <input name="location" value={educationInfo.location} onChange={handleInput} required placeholder="ie. Philadelphia, PA"></input>

        <label>GPA</label>
        <input name="gpa" value={educationInfo.gpa} onChange={handleInput} placeholder="ie. 3.95"></input>

        <label>Recognitions/Awards</label>
        <input name="recognitions" value={educationInfo.recognitions} onChange={handleInput}></input>

        <label>Coursework (Enter as comma separated)</label>
        <input name="courseWork" value={educationInfo.courseWork} onChange={handleInput} placeholder="Enter coursework separated by commas"></input>
        <button type="submit">Button</button>


    </form>
}