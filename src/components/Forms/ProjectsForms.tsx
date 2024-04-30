import { useState } from "react";

interface ProjectsProps{
    ProjectInfo: {
        title: string,
        technologies: string,
        projectPoints: string[],
    },
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmission: () => void;

}



export default function ProjectsForm({ProjectInfo, handleInput,handleSubmission}:ProjectsProps): JSX.Element{
    const [projectTask, setProjTask] = useState<string>("");

    const handleTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjTask(event.target.value);
    }

    const addProjTask = () => {
        ProjectInfo.projectPoints.push(projectTask);
        setProjTask("");
    }


    return <div className="flex flex-col">
        <label>Project Title</label>
        <input type="text" name="title" onChange={handleInput} value={ProjectInfo.title}></input>

        <label>Technologies</label>
        <input type="text" name="technologies" onChange={handleInput} value={ProjectInfo.technologies}></input>

        <label>Project Points</label>
        <input type="text" name="projectPoints" onChange={handleTaskInput} value={projectTask}></input>
        <button onClick={addProjTask}>Add Project Task</button>
        {ProjectInfo.projectPoints.map((point: string) => <li>{point}</li>)}

        <button onClick={handleSubmission}>Submit Project</button>

    </div>
}