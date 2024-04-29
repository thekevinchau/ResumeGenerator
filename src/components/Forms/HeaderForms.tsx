
interface HeaderProps {
    HeaderInfo: {
        name: string,
        email: string,
        cell: string,
        city: string,
        state: string,
    }
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function HeaderForms ({HeaderInfo, handleChange}: HeaderProps): JSX.Element {
    return <div className="flex flex-col w-11/12">
        <label>Full Name</label>
        <input type="text" name="name" value={HeaderInfo.name} placeholder="ie. Kevin Chau" onChange={handleChange} required></input>
        <label>Email:</label>
        <input type="text" name="email" value={HeaderInfo.email} placeholder="ie. kevin.chau613@gmail.com" onChange={handleChange} required></input>
        <label>Cellphone</label>
        <input type="text" name="cell" value={HeaderInfo.cell} placeholder="ie. 555-555-5555" onChange={handleChange} required></input>
        <label>City</label>
        <input type="text" name="city" value={HeaderInfo.city} placeholder="ie. Philadelphia" onChange={handleChange} required></input>
        <label>State</label>
        <input type="text" name="state" value={HeaderInfo.state} placeholder="ie. Pennsylvania" onChange={handleChange}required></input>
    </div>
}