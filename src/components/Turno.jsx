export default function Turnos(props) {
    return (
        <li>
            <div>
                <span>{props.turno.id}</span>
                <span>{props.turno.doctor}</span>
                <span>Consultorio: {props.turno.consultorio}</span>
            </div>
        </li>
    );
}