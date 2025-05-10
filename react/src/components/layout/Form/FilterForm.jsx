import styles from './FilterForm.module.css'
import './Form.module.css'

import Input from './Input';
import Select from './Select'

function FilterForm() {
    const filter_inputs= [
        {name: 'start-date-filter', type: 'date', label: 'Data'},
        {name: 'end-date-filter', type: 'date', label: 'Até'},
        {name: 'title-filter', type: 'text', label: 'Serviço'},
        {name: 'person-filter', type: 'text', label: 'Cliente'},
        {name: 'phone-filter', type: 'tel', label: 'Telefone'},
        {name: 'value-filter', type: 'number', label: 'Valor', min: 0, step: 0.01, value: 0},
    ]
    
    const options= [
        {value: 'all', text: 'Todos'},
        {value: 'paid', text: 'Pago'},
        {value: 'pending', text: 'Pendente', selected: 'selected'}
    ]

    return(
        <form className={styles.filter_form}>
            {filter_inputs.map(({name, type, label, value, required, step, min}) => (
                <Input name={name} type={type} label={label} value={value} required={required} step={step} min={min}/>
            ))}

            <Select name="status_filter" label="Status" options={options} />
        </form>
    )
}

export default FilterForm;