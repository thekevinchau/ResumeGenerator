//COMPLETED



interface HeaderProps{
    name: string,
    city: string,
    state: string,
    email: string,
    number: string,
}

export function HeaderSection({name, city, state, email, number}: HeaderProps){
    return <div className="border text-center">
        <h1>{name}</h1>
        <span><b>Email:</b> {email} <b>Email:</b> {number}</span>
        <p>{city}, {state}</p>
    </div>

}