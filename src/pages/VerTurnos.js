import { turnos } from '../mocks/turnos';
import Turnos from '../components/Turnos.jsx';

export default function VerTurnos() {
    return (
        <div className="App">
            <h2>Ver Turnos</h2>
            <Turnos turnos={turnos} />
        </div>
    );
}