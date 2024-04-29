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
    return <div className="flex flex-col ml-8 mr-8">
        <b className="self-center">Education</b>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col text-xs">

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
            <span>{EducationInfo.awards.map((award: string) => <li className="ml-5">{award}</li>)}</span>



        <span>{EducationInfo.coursework}</span>
        </div>
    </div>
}