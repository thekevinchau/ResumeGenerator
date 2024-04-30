import { useState } from "react";

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
    handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    submitExperience: () => void;
}

export default function ExperienceForms ({handleTextChange, ExperienceInfo, submitExperience}: ExperienceProps): JSX.Element {
    const [task, setTask] = useState<string>("");

    const handleTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const addTask = () => {
        ExperienceInfo.tasks.push(task);
        setTask("");
    }



    return <div className="flex flex-col">
        <label>Company</label>
        <input type="text" name="company" value={ExperienceInfo.company} onChange={handleTextChange}></input>
        
        <label>Location</label>
        <input type="text" name="location" value={ExperienceInfo.location} onChange={handleTextChange}></input>

        <label>Position</label>
        <input type="text" name="position" value={ExperienceInfo.position} onChange={handleTextChange}></input>

        <label>Start Month</label>
        <input type="month" name="startMonth" value={ExperienceInfo.startMonth} onChange={handleTextChange}></input>

        <label>End Month</label>
        <input type="month" name="endMonth" value={ExperienceInfo.endMonth} onChange={handleTextChange}></input>

        <span>
        <label>Are you currently an employee?</label>
        <input type="checkbox"></input>
        </span>

        <label>Responsibilities</label>
        <span>
        <input type="text" name="task" value={task} onChange={handleTaskInput}></input>
        <button onClick={addTask}>Add Responsibility</button>
        </span>
        {ExperienceInfo.tasks.map((task: string) => <li>{task}</li>)}

        <button onClick={submitExperience}>Submit Experience</button>
    </div>
}