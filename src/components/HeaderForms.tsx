interface HeaderFormsProps{
    handleFormInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    headerInfo: {
        name: string,
        city: string,
        state: string,
        email: string,
        number: string,
    },
}


export function HeaderForms({handleFormInput, headerInfo}: HeaderFormsProps){
    return <div className="flex flex-col">
        <form className="flex flex-col">
            <label>Full Name</label>
            <input type="text"name="name" onChange={handleFormInput} value={headerInfo.name} required placeholder="ex. John Doe"></input>

            <label>City</label>
            <input type="text"name="city" onChange={handleFormInput} value={headerInfo.city} required placeholder="ex. Philadelphia"></input>

            <label>State</label>
            <input type="text"name="state" onChange={handleFormInput} value={headerInfo.state} required placeholder="ex. Pennsylvania"></input>

            <label>Email</label>
            <input type="text"name="email" onChange={handleFormInput} value={headerInfo.email} required placeholder="ex. JohnDoe@gmail.com"></input>

            <label>Number</label>
            <input type="text"name="number" onChange={handleFormInput} value={headerInfo.number} required placeholder="ex. 555-555-5555"></input>
        </form>
    </div>
}