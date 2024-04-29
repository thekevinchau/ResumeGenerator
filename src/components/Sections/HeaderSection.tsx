interface HeaderProps {
    HeaderInfo: {
        name: string,
        email: string,
        cell: string,
        city: string,
        state: string,
    }
}

export default function HeaderSection({HeaderInfo}: HeaderProps):JSX.Element {
    return (<div>
        <h1 className="">{HeaderInfo.name}</h1>
        <span>{HeaderInfo.email} {HeaderInfo.cell}</span>
    </div>)
}