interface EducationProps{
    degree: string,
    college: string,
    expectedGrad: string,
    location: string
}

export function EducationSection({degree, college, expectedGrad, location}: EducationProps){
    return <div>
        <span>{degree} {college}</span>
        <span>{expectedGrad}{location}</span>
    </div>
}