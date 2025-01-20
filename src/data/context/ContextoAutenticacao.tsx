"use client";
import { createContext } from "react";
import Autenticacao from "../auth/Autenticacao";
import useMensagens from "../hooks/useMensagens";
import useNavegacao from "../hooks/useNavegacao";

interface ContextoAutenticacaoProps {
    cadastrar: (param: dadosCadastro) => Promise<void>;
}

const ContextoAutenticacao = createContext<ContextoAutenticacaoProps>({} as any);

export function AutenticacaoProvider(props: any) {
    const {mensagemSucesso, mensagemErro} = useMensagens();
    
    async function cadastrar(param: dadosCadastro) {
        const { nome, email, senha } = param;
        const {irLogin} = useNavegacao();
        try {
            await Autenticacao.cadastrar(email, senha);
            mensagemSucesso("Usuário cadastrado com sucesso!");
            irLogin();
        }catch (error:any) {
            console.error(error);
            mensagemErro("Erro ao cadastrar usuário!" + error.message);
        }
    } 

    return <ContextoAutenticacao.Provider value={{
        cadastrar
    }}>{props.children}</ContextoAutenticacao.Provider>;
}

export default ContextoAutenticacao;
