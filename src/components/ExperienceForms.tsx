import { ExperienceInfo } from "../App";

interface ExpFormsProps{
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    experienceInfo: ExperienceInfo,
}

export function ExperienceForms({handleInput, experienceInfo}: ExpFormsProps){
    return <div className="flex flex-col">
        <label>Company Name</label>
        <input type="text" name="company" onChange={handleInput} value={experienceInfo.company} required></input>

        <label>Location</label>
        <input type="text" name="location" onChange={handleInput} value={experienceInfo.location}></input>

        <label>Title</label>
        <input type="text" name="title" onChange={handleInput} value={experienceInfo.title}></input>

        <label>Start Date</label>
        <input type="text" name="title" onChange={handleInput} value={experienceInfo.startDate}></input>

        <label>End Date</label>
        <input disabled={experienceInfo.currentEmployee === true}></input>
    </div>
}