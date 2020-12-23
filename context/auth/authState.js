import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
    USUARIO_AUTENTICADO,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LIMPIAR_ALERTA
} from '../../types';
import clienteAxios from '../../config/axios';

const AuthState = ({children}) => {

    //Definir un state inicial
    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    //Definir el Reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    //Usuario autenticado
    const usuarioAutenticado = nombre => {
        dispatch({
            type: USUARIO_AUTENTICADO,
            payload: nombre
        })
    }

    //Registrar nuevos usuarios
    const registrarUsuario = async datos => {
        
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            })

            //Limpia la alerta después de 3 segundos
            setTimeout(() => {
                dispatch({
                    type: LIMPIAR_ALERTA
                })
            }, 3000)
        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })

            //Limpia la alerta después de 3 segundos
            setTimeout(() => {
                dispatch({
                    type: LIMPIAR_ALERTA
                })
            }, 3000)
        }
    }

    return(
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                usuarioAutenticado,
                registrarUsuario
            }}
        >
            {children}
        </authContext.Provider>
    )
}   

export default AuthState;