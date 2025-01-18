"use client";
import { createContext } from "react";

interface ContextoAutenticacaoProps {}

const ContextoAutenticacao = createContext<ContextoAutenticacaoProps>({} as any);

export function AutenticacaoProvider(props: any) {
    return <ContextoAutenticacao.Provider value={{}}>{props.children}</ContextoAutenticacao.Provider>;
}

export default ContextoAutenticacao;
