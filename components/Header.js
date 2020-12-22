import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (  
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Link href="/">
                <img src="logo.svg" className="w-64 mb-8 md:mb-0" />
            </Link>
            
            <div>
                <Link href="/login">
                    <a className="bg-red-500 px-5 py-3 mr-2 rounded text-white font-bold uppercase">Iniciar Sesión</a>
                </Link>
                <Link href="/crearcuenta">
                    <a className="bg-black px-5 py-3 rounded text-white font-bold uppercase">Crear Cuenta</a>
                </Link>
            </div>
        </header>
    );
}
 
export default Header;