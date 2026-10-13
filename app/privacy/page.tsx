const PrivacyPage = () => {
    return (
        <main className="mx-auto w-full max-w-2xl px-6 py-12 text-[#111111]">
            <h1 className="text-3xl font-black uppercase leading-none sm:text-4xl">
                Política de Privacidade
            </h1>
            <p className="mt-3 font-mono text-xs uppercase text-[#E8352C]">
                Última atualização: outubro de 2026
            </p>

            <p className="mt-8 leading-relaxed">
                O AnimeDex é um projeto pessoal para acompanhar animes. Esta página explica
                quais dados o site guarda e como eles são usados.
            </p>

            <h2 className="mt-8 border-b-[3px] border-[#111111] pb-1 text-xl font-black uppercase">
                Quais dados coletamos
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
                <li>
                    Ao entrar com Google ou GitHub: seu nome, e-mail e foto de perfil,
                    fornecidos pelo próprio provedor.
                </li>
                <li>
                    Ao criar conta com e-mail e senha: seu nome, e-mail e senha. A senha é
                    guardada de forma criptografada (hash), nunca em texto puro.
                </li>
                <li>
                    Os animes que você adiciona às suas listas e o status de cada um
                    (Assistindo, Completo, Quero Assistir, Dropado).
                </li>
                <li>Um cookie de sessão, necessário para manter você logado.</li>
            </ul>

            <h2 className="mt-8 border-b-[3px] border-[#111111] pb-1 text-xl font-black uppercase">
                Para que usamos
            </h2>
            <p className="mt-3 leading-relaxed">
                Apenas para identificar você, manter sua sessão e mostrar suas listas de
                animes. Não usamos seus dados para publicidade e não os vendemos.
            </p>

            <h2 className="mt-8 border-b-[3px] border-[#111111] pb-1 text-xl font-black uppercase">
                Compartilhamento e armazenamento
            </h2>
            <p className="mt-3 leading-relaxed">
                Seus dados não são compartilhados com terceiros, exceto com os serviços
                necessários para o site funcionar: hospedagem (Vercel) e banco de dados
                (Neon). As informações dos animes exibidas no site vêm da API pública do
                AniList e não incluem dados pessoais seus.
            </p>

            <h2 className="mt-8 border-b-[3px] border-[#111111] pb-1 text-xl font-black uppercase">
                Exclusão dos dados
            </h2>
            <p className="mt-3 leading-relaxed">
                Para pedir a exclusão da sua conta e de todos os dados associados, envie
                um e-mail para o contato abaixo.
            </p>

            <h2 className="mt-8 border-b-[3px] border-[#111111] pb-1 text-xl font-black uppercase">
                Contato
            </h2>
            <p className="mt-3 leading-relaxed">alexandre020602@gmail.com</p>
        </main>
    );
};

export default PrivacyPage;