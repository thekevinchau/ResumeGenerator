
interface ExperienceProps{
    ExperienceInfo: {
        company: string,
        location: string,
        position: string,
        startMonth: string,
        endMonth: string,
        currentEmployee: boolean,
        tasks: string   [],
    },
    handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}



export default function ExperienceForms ({handleTextChange, ExperienceInfo}: ExperienceProps): JSX.Element {
    return <div className="flex flex-col">
        <label>Company</label>
        <input type="text" name="company" value={ExperienceInfo.company} onChange={handleTextChange}></input>
        
        <label>Location</label>
        <input type="text" name="location" value={ExperienceInfo.location} onChange={handleTextChange}></input>

        <label>Position</label>
        <input type="text" name="position" value={ExperienceInfo.position} onChange={handleTextChange}></input>

        <label>Start Month</label>
        <input type="month" name="startMonth" value={ExperienceInfo.startMonth}></input>

        <label>End Month</label>
        <input type="month" name="endMonth" value={ExperienceInfo.endMonth}></input>


        <span>
        <label>Are you currently an employee?</label>
        <input type="checkbox"></input>
        </span>

        <label>Responsibilities</label>
    </div>
}