export default function CargarTurnos() {
    return (
        <div>
            <h1>Cargar Turnos</h1>
            <form action="">
                <div>
                    <legend>Nombre</legend>
                    <input type="text" />
                </div>
                <div>
                    <legend>Apellido</legend>
                    <input type="text" />
                </div>
                <div>
                    <legend>Doctor</legend>
                    <input type="text" />
                </div>
                <div>
                    <legend>Consultorio</legend>
                    <input type="text" />
                </div>
                <div>
                    <legend>Fecha</legend>
                    <input type="text" />
                </div>
                <div>
                    <legend>Horario</legend>
                    <input type="text" />
                </div>

                <div>
                    <input type="submit" value="Cargar" />
                </div>
            </form>
        </div>
    );
}