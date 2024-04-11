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
    return <div>
        <form>
            <label>Full Name</label>
            <input type="text"name="name" onChange={handleFormInput} value={headerInfo.name}></input>

            <label>City</label>
            <input type="text"name="city" onChange={handleFormInput} value={headerInfo.city}></input>

            <label>State</label>
            <input type="text"name="state" onChange={handleFormInput} value={headerInfo.state}></input>

            <label>Email</label>
            <input type="text"name="email" onChange={handleFormInput} value={headerInfo.email}></input>

            <label>Number</label>
            <input type="text"name="number" onChange={handleFormInput} value={headerInfo.number}></input>
        </form>
    </div>
}