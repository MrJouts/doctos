import { turnos } from '../mocks/turnos';

export default function VerTurnos() {
    const listadoTurnos = turnos.map(turno =>
        <li>
            <div>
                <span>{turno.id}</span>
                <span>{turno.doctor}</span>
                <span>Consultorio: {turno.consultorio}</span>
            </div>
        </li>
    )

    return (
        <div className="App">
            <h2>Ver Turnos</h2>
            <ul>{listadoTurnos}</ul>
        </div>
    );
}