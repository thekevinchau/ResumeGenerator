interface EducationProps{
    degree: string,
    college: string,
    expectedGrad: string,
    location: string
    gpa: number,
    recognitions: string[],
    coursework: string,
}

export function EducationSection({degree, college, expectedGrad, location, gpa, recognitions, coursework }: EducationProps){
    return <div className="ml-8 mr-8 font-serif text-[0.75rem]">
        <p className="text-center font-bold">Education</p>
        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="flex justify-between">
            <b>{college}</b>
            <b>{location}</b>
        </div>
        <div className="flex justify-between">
            <span>{degree}</span>
            <span>{expectedGrad}</span>
        </div>
        <b className="text-[0.75rem]">Cumulative GPA: {gpa}</b>
        
        <div className="ml-8 text-[0.75rem]">
            {recognitions.map((award: string) => <li>{award}</li>)}
        </div>
        <b>Relevant Coursework: </b>{coursework}
        


    </div>
}