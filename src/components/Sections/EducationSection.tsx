interface EducationProps {
    EducationInfo: {
        school: string,
        degree: string,
        gpa: number,
        awards: string[],
        coursework: string,
        location: string,
        expectedGrad: string,
    }
}

export default function EducationSection({EducationInfo}: EducationProps ): JSX.Element {
    return <div className="flex flex-col ml-7 mr-7 text-xs">
        <div className="flex flex-col">
            <p className="flex justify-between font-bold">
                <span>{EducationInfo.school}</span>
                <span>{EducationInfo.location}</span>
            </p>

            <p className="flex justify-between mt-1">
                <span className="italic">{EducationInfo.degree}</span>
                <span>{EducationInfo.expectedGrad}</span>
            </p>

            <p className="mt-1">
            <b>Cumulative GPA: </b>{EducationInfo.gpa}
            </p>
            <span className="mt-1 mb-1">{EducationInfo.awards.map((award: string) => <li className="ml-5">{award}</li>)}</span>



            <span> <b>Relevant Coursework: </b>{EducationInfo.coursework}</span>
        </div>
    </div>
}