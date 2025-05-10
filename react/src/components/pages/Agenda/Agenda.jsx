import TopBar from '../../layout/TopBar/TopBar'
import FilterForm from '../../layout/Form/FilterForm'
import Table from '../../layout/Table/Table'

function Agenda() {
    const theads = ['Data', 'Serviço', 'Cliente', 'Telefone', 'Valor', 'Pagamento'];
    const trows = [
        ['27/04/2025 - 10:30 AM', 'Coloração', 'Camila Ferreira Lopes', '41988776655', 'R$350,00', 'Pago'],
        ['27/04/2025 - 1:00 PM', 'Progressiva', 'Eduarda Lima', '41995552211', 'R$600,00', 'Pendente'],
        ['27/04/2025 - 3:45 PM', 'Manicure', 'Letícia Silva', '42991234567', 'R$80,00', 'Pago'],
        ['28/04/2025 - 9:00 AM', 'Sobrancelha', 'Patrícia Souza', '42999887766', 'R$50,00', 'Pago'],
        ['28/04/2025 - 11:00 AM', 'Depilação', 'Mariana Costa', '42993445566', 'R$150,00', 'Pendente'],
        ['28/04/2025 - 2:00 PM', 'Design de Unhas', 'Bruna Martins', '42990011223', 'R$120,00', 'Pago'],
        ['28/04/2025 - 4:30 PM', 'Hidratação', 'Ana Paula Moreira', '41987654321', 'R$200,00', 'Pendente'],
        ['29/04/2025 - 10:00 AM', 'Maquiagem', 'Fernanda Pires', '42998887777', 'R$250,00', 'Pago'],
        ['29/04/2025 - 12:00 PM', 'Botox Capilar', 'Juliana Rocha', '41997776655', 'R$450,00', 'Pendente'],
        ['29/04/2025 - 2:00 PM', 'Corte Infantil', 'Lucas Matheus', '42991112233', 'R$60,00', 'Pago'],
        ['29/04/2025 - 5:00 PM', 'Escova', 'Carolina Lima', '42992223344', 'R$90,00', 'Pendente'],
        ['30/04/2025 - 9:30 AM', 'Alongamento de Unhas', 'Larissa Ferreira', '41998885522', 'R$300,00', 'Pago'],
        ['30/04/2025 - 11:00 AM', 'Coloração', 'Amanda Oliveira', '42994445566', 'R$370,00', 'Pendente'],
        ['30/04/2025 - 1:30 PM', 'Penteado', 'Isabela Mendes', '42995556677', 'R$280,00', 'Pago'],
        ['30/04/2025 - 4:00 PM', 'Tratamento Capilar', 'Natália Rodrigues', '41990001122', 'R$220,00', 'Pendente'],
        ['01/05/2025 - 10:00 AM', 'Maquiagem Noiva', 'Priscila Andrade', '42997778899', 'R$700,00', 'Pago'],
        ['01/05/2025 - 1:00 PM', 'Depilação Completa', 'Renata Alves', '42996667755', 'R$250,00', 'Pago'],
        ['01/05/2025 - 3:00 PM', 'Hidratação', 'Tatiane Souza', '41992223344', 'R$180,00', 'Pendente'],
        ['01/05/2025 - 5:30 PM', 'Corte Masculino', 'Felipe Silva', '41993334455', 'R$70,00', 'Pago'],
    ]
    
    return (
        <>
            <TopBar title='Agenda' btn='Novo' btntype='new'/>
            <FilterForm></FilterForm>
            <Table heads={theads} rows={trows}></Table>
        </>
    )
}

export default Agenda;