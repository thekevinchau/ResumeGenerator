import { ExperienceInfo } from "../App";

interface ExpFormsProps{
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmission: () => void;
    experienceInfo: ExperienceInfo,
}


export function ExperienceForms({handleInput, experienceInfo, handleSubmission}: ExpFormsProps){
    const handleExperienceSubmission = (event: React.ChangeEvent<SubmitEventInit>) => {
        event.preventDefault()
        handleSubmission();
    }

    
    return <div className="flex flex-col">
        <form onSubmit={handleExperienceSubmission}>
            <label>Company Name</label>
            <input type="text" name="company" onChange={handleInput} value={experienceInfo.company} required></input>

            <label>Location</label>
            <input type="text" name="location" onChange={handleInput} value={experienceInfo.location}></input>

            <label>Title</label>
            <input type="text" name="title" onChange={handleInput} value={experienceInfo.title}></input>

            <label>Start Date</label>
            <input type="text" name="startDate" onChange={handleInput} value={experienceInfo.startDate}></input>

            <label>End Date</label>
            <input disabled={experienceInfo.currentEmployee === true}></input>
            
            <button type="submit">Submit Experience Information</button>
        </form>
    </div>
}