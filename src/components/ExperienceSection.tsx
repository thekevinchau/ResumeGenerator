interface ExperienceProps{
    experienceInfo: {
        company: string,
        location: string,
        title: string,
        startDate: string,
        endDate: string,
        currentEmployee: boolean,
    }
}

export function ExperienceSection({experienceInfo}: ExperienceProps){
    return <div>
        {experienceInfo.company}
        {experienceInfo.location}
        {experienceInfo.title}
    </div>

}