// src/components/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Elimina el token del localStorage
        localStorage.removeItem('token');

        // Redirige al usuario a la página de login
        navigate('/login');
    }, [navigate]);

    return null; // No se necesita renderizar nada en este componente
}

export default Logout;