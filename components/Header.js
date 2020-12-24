import React from 'react';
import Link from 'next/link';

import authContext from '../context/auth/authContext';
import { useEffect, useContext } from 'react';

const Header = () => {

    //Extraer el usuario autenticado del storage
    const AuthContext = useContext(authContext);
    const { usuarioAutneticado, usuario, cerrarSesion } = AuthContext;

    useEffect(() => {
        usuarioAutneticado();
    }, [])

    return (  
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Link href="/">
                <img src="logo.svg" className="w-64 mb-8 md:mb-0" />
            </Link>
            
            <div>
                {usuario ? ( 
                    <div className="flex items-center">
                        <p className="mr-2">Hola {usuario.nombre}</p>
                        <button 
                            type="button" 
                            className="bg-black px-5 py-3 rounded text-white font-bold uppercase"
                            onClick={cerrarSesion}
                        >Cerrar Sesión</button>
                    </div>
                ) : (
                        <>
                            <Link href="/login">
                                <a className="bg-red-500 px-5 py-3 mr-2 rounded text-white font-bold uppercase">Iniciar Sesión</a>
                            </Link>
                            <Link href="/crearcuenta">
                                <a className="bg-black px-5 py-3 rounded text-white font-bold uppercase">Crear Cuenta</a>
                            </Link>
                        </>
                    )
                }
            </div>
        </header>
    );
}
 
export default Header;