"use client";
import LayoutExterno from "@/components/template/LayoutExterno";
import BotaoVoltar from "@/components/template/BotaoVoltar";
import CampoComBotao from "@/components/template/CampoComBotao";

export default function EsqueciSenha() {
    return (
        <LayoutExterno titulo="Digite o seu email">
            <CampoComBotao nomeInput="Email" textoBotao="Enviar email"></CampoComBotao>
            <BotaoVoltar />
        </LayoutExterno>
    );
}
