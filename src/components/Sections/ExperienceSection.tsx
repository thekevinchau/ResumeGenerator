interface ExperienceProps{
    ExperienceInfo: {
        company: string,
        location: string,
        position: string,
        startMonth: string,
        endMonth: string,
        currentEmployee: boolean,
        tasks: string[],
      }
}

export default function ExperienceSection ({ExperienceInfo}: ExperienceProps): JSX.Element {
    const parseDate = (date: string) => {
        const splitDate = date.split('-');
        const year = parseInt(splitDate[0]);
        const month = parseInt(splitDate[1]) - 1;
        const DateObj = new Date(year, month);
        return DateObj;
    }

    const startMonth = parseDate(ExperienceInfo.startMonth).toLocaleString('default', {month: 'long'});
    const endMonth = parseDate(ExperienceInfo.endMonth).toLocaleString('default', {'month': 'long'});

    const startYear = parseDate(ExperienceInfo.startMonth).getFullYear();
    const endYear = parseDate(ExperienceInfo.endMonth).getFullYear();

    return <div className="flex flex-col ml-7 mr-7 text-xs">
        <span className="flex justify-between">
            <b>{ExperienceInfo.company}</b>
            <b>{ExperienceInfo.location}</b>
        </span>

        <span className="flex justify-between">
            <p className="italic">{ExperienceInfo.position}</p>
            <p>
                {ExperienceInfo.startMonth !== "" && <span>{startMonth} {startYear} - </span>} 
                {ExperienceInfo.endMonth !== "" && <span>{endMonth} {endYear}</span>}
                </p>
        </span>

        <div className="mt-1">
            {ExperienceInfo.tasks.map((task: string) => <li className="ml-5">{task}</li>)}
        </div>
    </div>
}