interface EducationProps {
    EducationInfo: {
        school: string,
        degree: string,
        gpa: number,
        awards: string[],
        coursework: string,
    }
}

export default function EducationSection({EducationInfo}: EducationProps ): JSX.Element {
    return <div>
        <span>{EducationInfo.school}</span>
        <span>{EducationInfo.degree}</span>
        <span>{EducationInfo.gpa}</span>
        <span>{EducationInfo.coursework}</span>
        <span>{EducationInfo.awards.map((award: string) => <li>{award}</li>)}</span>
    </div>
}