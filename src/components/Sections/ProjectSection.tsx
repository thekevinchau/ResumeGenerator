interface ProjectsProps{
    ProjectInfo: {
        title: string,
        technologies: string,
        projectPoints: string[],
    },
}





export default function ProjectSection ({ProjectInfo}: ProjectsProps): JSX.Element {
    return <div>
        <b>{ProjectInfo.title}</b>
        <p>{ProjectInfo.technologies}</p>
        {ProjectInfo.projectPoints.map((bulletPoint: string) => <li className="ml-7">{bulletPoint}</li>)}
    </div>
}