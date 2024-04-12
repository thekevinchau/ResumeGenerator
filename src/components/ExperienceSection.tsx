interface ExperienceProps{
    experienceInfo: {
        company: string,
        location: string,
        title: string,
        startDate: string,
        endDate: string,
        currentEmployee: boolean,
        tasks: string[],
    }
}

export function ExperienceSection({experienceInfo}: ExperienceProps){
    return <div className="font-serif text-[12px]">

        <div className="flex justify-between">
            <b>{experienceInfo.company}</b>
            <b>{experienceInfo.location}</b>
        </div>
        
        <div className="flex justify-between">
        <span className="italic">{experienceInfo.title}</span>
        <span>{experienceInfo.startDate} - {experienceInfo.currentEmployee === true ? <span>{"Present"}</span> : <span>{experienceInfo.endDate}</span>}</span>
        </div>
        <div className="ml-8 mt-1">
            {experienceInfo.tasks.map((task: string, index: number) => <li key={index}>{task}</li>)}
        </div>
    </div>

}