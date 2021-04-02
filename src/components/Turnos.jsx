import Turno from './Turno';

export default function Turnos(props) {
    return (
        <ul>
            { props.turnos.map((turno) => <Turno key={turno.id} turno={turno} />)}
        </ul>
    );
}