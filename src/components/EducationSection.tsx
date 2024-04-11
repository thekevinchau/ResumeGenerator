interface EducationProps{
    educationInfo: {
        degree: string,
        college: string,
        expectedGrad: string,
        location: string
        gpa: number,
        recognitions: string[],
        courseWork: string,
    }

}

export function EducationSection({educationInfo}: EducationProps){
    return <div className="font-serif text-[0.75rem] mb-3">
        <div className="flex justify-between">
            <b>{educationInfo.college}</b>
            <b>{educationInfo.location}</b>
        </div>
        <div className="flex justify-between">
            <span className="italic">{educationInfo.degree}</span>
            <span>{educationInfo.expectedGrad}</span>
        </div>
        <b className="text-[0.75rem]">Cumulative GPA: {educationInfo.gpa}</b>
        
        <div className="ml-8 text-[0.75rem]">
            {educationInfo.recognitions.map((award: string) => <li>{award}</li>)}
        </div>
        <b>Relevant Coursework: </b>{educationInfo.courseWork}
        


    </div>
}