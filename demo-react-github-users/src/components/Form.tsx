function Form() {
    return ( 
    <form className="w-full max-w-sm mx-auto">
        <div className="flex mt-10">
            <input name="username" required />
            <button type="submit">Search</button>
        </div>
    </form>
    )
}


export default Form