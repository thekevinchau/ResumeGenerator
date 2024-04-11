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
        </form>
    </div>
}