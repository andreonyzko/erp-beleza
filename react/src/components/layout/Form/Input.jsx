function Input({name, type, label, value, required, step, min}) {
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} value={value} step={step} min={min}
            // {...(required != undefined)? 'required' : ''} 
            />
        </div>
    )
}

export default Input;