function Select({ name, label, options }) {
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                {options.map(({value, text, selected}) => (
                    <option value={value} {...selected}>{text}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;