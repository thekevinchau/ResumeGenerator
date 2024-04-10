/*

TODOs:
    - Pass input elements from child to parent (DONE)


COMPLETED:
    - Create form input for name, email, phone number, address

*/

interface HeaderProps{
    changeName: (name: string) => void,
    changeCity: (city: string) => void,
    changeState: (state: string) => void,
    changeEmail: (email: string) => void,
    changeNumber: (phoneNum: string) => void,


}

export function HeaderInputs({changeName,changeCity, changeState, changeEmail, changeNumber }:HeaderProps): JSX.Element{

    function nameInput(event: React.ChangeEvent<HTMLInputElement>): void {
        changeName(event.target.value);
    }
    function cityInput(event: React.ChangeEvent<HTMLInputElement>): void {
        changeCity(event.target.value);
    }
    function stateInput(event: React.ChangeEvent<HTMLInputElement>): void {
        changeState(event.target.value);
    }
    function emailInput(event: React.ChangeEvent<HTMLInputElement>): void {
        changeEmail(event.target.value);
    }
    function numberInput(event: React.ChangeEvent<HTMLInputElement>): void {
        changeNumber(event.target.value);
    }

    return <div className="border h-screen overflow-scroll">
        <h1>Header</h1>
        <form>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input onChange={nameInput} type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input onChange={cityInput} type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />


            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
            <input onChange={stateInput} type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input onChange={emailInput} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />


            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input onChange={numberInput} type="number" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
        </form>
        </div>
}