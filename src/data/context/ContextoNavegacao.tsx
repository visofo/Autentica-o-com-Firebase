"use client";
import { useRouter } from "next/navigation";
import { createContext } from "react";
import { usePathname } from "next/navigation";

interface ContextoNavegacaoProps {
    irLogin: () => void;
    irHomeAplicacao: () => void;
    estaEmLogin: () => boolean;
    paginaAtual: () => string;
    recarregarPagina: () => void;
}

const ContextoNavegacao = createContext<ContextoNavegacaoProps>({} as any);

export function NavegacaoProvider(props: any) {
    const router = useRouter();
    const pathname = usePathname();
    const homeAplicacao = "/home";
    const paginaLogin = "/";

    function irLogin() {
        router.push(paginaLogin);
    }

    function irHomeAplicacao() {
        router.push(homeAplicacao);
    }

    function estaEmLogin() {
        return paginaLogin === pathname;
    }

    function paginaAtual() {
        return pathname;
    }

    function recarregarPagina() {
        router.refresh();
    }

    return (
        <ContextoNavegacao.Provider
            value={{
                irLogin,
                irHomeAplicacao,
                estaEmLogin,
                paginaAtual,
                recarregarPagina,
            }}
        >
            {props.children}
        </ContextoNavegacao.Provider>
    );
}

export default ContextoNavegacao;
