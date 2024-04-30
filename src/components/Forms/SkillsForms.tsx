interface SkillsProps {
    SkillsInfo: {
        progLanguages: string,
        environments: string,
        technologies: string,
    },
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function SkillsForms ({SkillsInfo, handleInput}: SkillsProps): JSX.Element {
    return <div className="flex flex-col">
        <h2>Comma separated</h2>

        <label>Programming Languages</label>
        <input type="text" name="progLanguages" onChange={handleInput} value={SkillsInfo.progLanguages}></input>

        <label>IDEs/Operating Systems</label>
        <input type="text" name="environments" onChange={handleInput} value={SkillsInfo.environments}></input>

        <label>Technologies</label>
        <input type="text" name="technologies" onChange={handleInput} value={SkillsInfo.technologies}></input>
    </div>
}