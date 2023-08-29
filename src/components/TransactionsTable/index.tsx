import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desensvolvimento</td>
                        <td>29/08/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withDraw">- R$1.100</td>
                        <td>Apartamento</td>
                        <td>29/08/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}