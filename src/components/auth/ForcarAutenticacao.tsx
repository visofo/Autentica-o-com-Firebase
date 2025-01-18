import { Loader } from "@mantine/core";
import useNavegacao from "@/data/hooks/useNavegacao";

export default function ForcarAutenticacao(props: any) {
    const { irLogin } = useNavegacao();
    const carregando = false;
    const temUsuarioLogado = () => true;

    function renderizarConteudo() {
        return <>{props.children}</>;
    }

    function renderizarCarregando() {
        return (
            <div
                className={`
                flex justify-center items-center h-screen
            `}
            >
                <Loader />
            </div>
        );
    }

    if (!carregando && temUsuarioLogado()) {
        return renderizarConteudo();
    } else if (carregando) {
        return renderizarCarregando();
    } else {
        irLogin?.();
    }
}
