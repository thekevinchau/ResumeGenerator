interface EducationProps{
    educationInfo: {
        degree: string,
        college: string,
        expectedGrad: string,
        location: string
        gpa: number,
        recognitions: string[],
        courseWork: string,
        id: 1,
    }

}

export function EducationSection({educationInfo}: EducationProps){
    return <div className="font-serif text-[0.75rem]">
        <p className="text-center font-bold">Education</p>
        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

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
            {educationInfo.recognitions.map((award: string) => <li key={educationInfo.id}>{award}</li>)}
        </div>
        <b>Relevant Coursework: </b>{educationInfo.courseWork}
        


    </div>
}