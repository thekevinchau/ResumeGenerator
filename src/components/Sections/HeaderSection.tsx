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
    return (<div className="flex flex-col justify-center items-center mt-1 text-xs mb-1 h-1/6">
        <h1 className="font-bold size text-2xl">{HeaderInfo.name}</h1>
        <span className="mt-1">
            <b>Email: </b>{HeaderInfo.email} <b>Cell: </b>{HeaderInfo.cell}
        </span>

        <span className="mt-1">
            {HeaderInfo.city}, {HeaderInfo.state}
        </span>

        <span></span>
    </div>)
}