export default function Login() {
    return (
        <div className="App">
            <h1>Login</h1>
            <form action="">
                <div>
                    <legend>Usuario</legend>
                    <input type="text" />
                </div>
                <div>
                    <legend>Contraseña</legend>
                    <input type="password" />
                </div>
                <input type="submit" value="Ingresar" />
            </form>
        </div>
    );
}