import TopBar from '../../layout/TopBar/TopBar'
import FilterForm from '../../layout/Form/FilterForm'
import Table from '../../layout/Table/Table'

function Vendas() {
    const theads = ['Data', 'Comprador', 'Telefone', 'Valor', 'Pagamento'];
    const trows = [
    ['27/04/2025 - 10:15 AM', 'Lucas Pereira da Silva', '41987654321', 'R$200,00', 'Pago'],
    ['28/04/2025 - 12:30 PM', 'Maria Fernanda Costa', '41876543210', 'R$80,00', 'Pendente'],
    ['29/04/2025 - 4:45 PM', 'José Eduardo Ramos', '41999887766', 'R$350,00', 'Pago'],
    ['30/04/2025 - 9:00 AM', 'Ana Carolina Souza', '41988776655', 'R$220,00', 'Pendente'],
    ['01/05/2025 - 11:30 AM', 'Marcelo da Silva Oliveira', '41994561234', 'R$130,00', 'Pago'],
    ['02/05/2025 - 2:00 PM', 'Carla Regina Lima', '42998765432', 'R$180,00', 'Pendente'],
    ['03/05/2025 - 1:00 PM', 'Roberto Alves da Silva', '42999876543', 'R$90,00', 'Pago'],
    ['04/05/2025 - 10:30 AM', 'Fernanda Pereira dos Santos', '42996543210', 'R$170,00', 'Pendente'],
    ['05/05/2025 - 12:15 PM', 'Paulo Henrique Alves', '41988765432', 'R$200,00', 'Pago'],
    ['06/05/2025 - 3:30 PM', 'Juliana Costa Oliveira', '42998654321', 'R$300,00', 'Pendente'],
    ['07/05/2025 - 4:45 PM', 'Fernando da Silva Santos', '42997765432', 'R$250,00', 'Pago'],
    ['08/05/2025 - 8:00 AM', 'Sandra Regina Souza', '41997654321', 'R$120,00', 'Pendente'],
    ['09/05/2025 - 10:00 AM', 'Ricardo Oliveira Santos', '42993344556', 'R$300,00', 'Pago'],
    ['10/05/2025 - 2:15 PM', 'Bruna Alves Costa', '42995566789', 'R$90,00', 'Pendente'],
    ['11/05/2025 - 11:00 AM', 'Felipe Monteiro Oliveira', '41991234567', 'R$350,00', 'Pago'],
    ['12/05/2025 - 1:30 PM', 'Eliane de Souza Silva', '42991456321', 'R$180,00', 'Pendente'],
    ['13/05/2025 - 4:00 PM', 'Ricardo Souza Lima', '41993034567', 'R$230,00', 'Pago'],
    ['14/05/2025 - 9:30 AM', 'Priscila Rocha Costa', '42992123456', 'R$400,00', 'Pendente'],
    ['15/05/2025 - 3:00 PM', 'Ricardo Lima de Oliveira', '41992234567', 'R$150,00', 'Pago'],
    ];

    return(
        <>
            <TopBar title="Vendas" btn="Novo" btntype="new"/>
            <FilterForm></FilterForm>
            <Table heads={theads} rows={trows}/>
        </>
    )
}

export default Vendas;