import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";


function FormsFirebase() {
  const auth = useAuth();
  const {displayName} = auth.user
/* A hook that allows you to use state in (formsRegister). */
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
/* A hook that allows you to use state in t(formsLogin). */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState(""); // Nuevo estado para el mensaje de registro
  const [loginMessage, setLoginMessage] = useState(""); // Nuevo estado para el mensaje de inicio de sesión
  const [logoutMessage, setLogoutMessage] = useState(""); // Nuevo estado para el mensaje de cierre de sesión


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await auth.register(emailRegister, passwordRegister);
      setRegistrationMessage("¡Usuario registrado exitosamente!");
    } catch (error) {
      // Manejar error de registro
      setRegistrationMessage("Error al registrar el usuario.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.login(email, password);
      setLoginMessage("¡Inicio de sesión exitoso!");
    } catch (error) {
      // Manejar error de inicio de sesión
      setLoginMessage("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };

  const handleLogout = () => {
    auth.logout();
    setLogoutMessage("¡Sesión finalizada!");
  };

  return (
    <div className="App">
      {displayName && <h5>Bienvenido desde Google: {displayName}</h5>}
      
      {registrationMessage && <p>{registrationMessage}</p>}
      {loginMessage && <p>{loginMessage}</p>}
      {logoutMessage && <p>{logoutMessage}</p>}

      <form className="form">
        <h3 className="title">Registrarse</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
          placeholder="Correo electrónico"

        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
          placeholder="Contraseña"

        />
        <button onClick={(e) => handleRegister(e)} className="button">
          Registrar
        </button>
      </form>
      <form className="form">
        <h3 className="title">Iniciar Sesion</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
          placeholder="Correo electrónico"

        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          type="password"
          placeholder="Contraseña"

        />
        <button onClick={(e) => handleLogin(e)} className="button">
          Ingresar
        </button>
        <button onClick={(e) => handleGoogle(e)} className="button">
          Google
        </button>
      </form>

      <button onClick={()=> handleLogout()} className="button">Cerrar Sesion</button>
    </div>
  );
}

export default FormsFirebase;