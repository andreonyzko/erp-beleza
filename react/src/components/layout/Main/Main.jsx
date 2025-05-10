import { Routes, Route } from 'react-router-dom'

import Dashboard from '../../pages/Dashboard/Dashboard'
import Agenda from '../../pages/Agenda/Agenda'
import Vendas from '../../pages/Vendas/Vendas'
import Despesas from '../../pages/Despesas/Despesas'
import Pagar from '../../pages/Pagar/Pagar'
import Receber from '../../pages/Receber/Receber'
import Relatorio from '../../pages/Relatorio/Relatorio'

import styles from './Main.module.css'

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/agenda' element={<Agenda />}></Route>
                <Route path='/vendas' element={<Vendas />}></Route>
                <Route path='/despesas' element={<Despesas />}></Route>
                <Route path='/receber' element={<Receber />}></Route>
                <Route path='/pagar' element={<Pagar />}></Route>
                <Route path='/relatorio' element={<Relatorio />}></Route>
            </Routes>
        </main>
    )
}

export default Main;