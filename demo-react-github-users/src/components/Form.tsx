function Form() {
    return ( 
    <form className="w-full max-w-sm mx-auto">
        <div className="flex mt-10">
            <input name="username"
             required
             className="block w-full px-3 py-2 borner border-gray-300 form-input rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
             />
            <button
             type="submit"
             className="px-3 py-2 ml-2 text-sm font-medium text-gray-700 borner border-gray-300 rounded-md leading-4 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
             Search
             </button>
        </div>
    </form>
    )
}


export default Form