import TopBar from '../../layout/TopBar/TopBar'
import CardsContainer from '../../layout/Card/CardsContainer'
import Card from '../../layout/Card/Card'
import Table from '../../layout/Table/Table'

function Dashboard() {
    const theads = ['Data', 'Serviço', 'Cliente', 'Telefone', 'Valor', 'Pagamento'];
    const trows = [
        ['27/04/2025 - 10:30 AM', 'Coloração', 'Camila Ferreira Lopes', '41988776655', 'R$350,00', 'Pago'],
        ['27/04/2025 - 1:00 PM', 'Progressiva', 'Eduarda Lima', '41995552211', 'R$600,00', 'Pendente'],
        ['27/04/2025 - 3:45 PM', 'Manicure', 'Letícia Silva', '42991234567', 'R$80,00', 'Pago']
    ]
    return(
        <>
            <TopBar title={'Dashboard'}></TopBar>
            <CardsContainer>
                <Card color='blue' title='Faturamento' highlight='R$100,00' details='Detalhes'/>
                <Card color='green' title='Afazeres hoje' highlight='10' details='Detalhes'/>
                <Card color='orange' title='Pendencias' highlight='R$100,00' details='Detalhes'/>
            </CardsContainer>
            <Table heads={theads} rows={trows} title="Agenda de hoje"/>
        </>
    )
}

export default Dashboard;