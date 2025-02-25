import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../api';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div className="profile-page">
      <h2>Perfil de Usuario</h2>
      <p>
        <strong>Nombre de Usuario:</strong> {profile.username}
      </p>
      <p>
        <strong>Rol:</strong> {profile.role}
      </p>
      {/* Puedes agregar más información si está disponible */}
    </div>
  );
};

export default Profile;
