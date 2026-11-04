import { createFileRoute } from "@tanstack/react-router";

const CHECKOUT = "https://payment.ticto.app/O7C6F45EE";
const TITLE = "7 negócios que ninguém dá valor e pagam caladinho | John Vinicius";
const DESC =
  "7 negócios pra você montar sozinho, com IA, aqui do Brasil. Sem aparecer, sem saber programar e sem enrolação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children, className = "" }: { children: string; className?: string }) {
  return (
    <a href={CHECKOUT} className={`cta w-full sm:w-auto text-base ${className}`}>
      {children}
    </a>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-extrabold leading-tight text-primary sm:text-3xl">{title}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}

const negocios = [
  ["📸", "Restaurar fotos antigas", "Transforme memória estragada em foto nova e cobre por isso."],
  ["🍔", "Foto de produto e comida com IA", "Vire o estúdio do comércio do bairro sem sair de casa."],
  ["🎬", "Anúncio em vídeo com avatar de IA", "Crie o ator que fala do produto, sem ninguém aparecer."],
  ["🤖", "Atendente de IA no WhatsApp", "Monte o robô que responde e agenda sozinho, 24h. O que mais paga recorrente."],
  ["✂️", "Cortar podcast e vídeo longo", "Transforme 1 hora de vídeo em vários cortes prontos."],
  ["💬", "Legenda e transcrição", "O serviço chato que pouca gente quer fazer e paga bem."],
  ["🎨", "Identidade visual pra quem tá começando", "Entregue logo e kit visual completo em 1 dia."],
];

const mapa = [
  "O que resolve e quanto essa dor custa pro cliente",
  "Quem exatamente compra",
  "O passo a passo de como montar",
  "A ferramenta certa e quanto custa",
  "Como conectar as ferramentas",
  "Quanto cobrar de entrada e de mensalidade",
  "Como achar e fechar cliente",
  "O erro que derruba quem tenta",
];

const faq = [
  ["Preciso saber programar?", "Não."],
  ["Preciso aparecer ou ter seguidores?", "Não."],
  ["Isso é promessa de ficar rico?", "Não. É um passo a passo real de como montar o serviço. Quem aplica, começa."],
  ["Como recebo?", "Por e-mail/na área de membros logo após a compra, em PDF."],
  ["As ferramentas são pagas?", "Dá pra começar várias no grátis. O guia mostra o custo de cada uma."],
];

function Index() {
  return (
    <main className="pb-24">
      {/* HERO */}
      <header className="glow-teal px-5 pb-16 pt-14 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-accent/50 bg-accent/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Ebook em PDF • 7 negócios com IA
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Enquanto você procura o <span className="text-primary">'negócio perfeito'</span>, tem gente faturando
            caladinho com serviço que ninguém olha.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            7 negócios pra você montar sozinho, com IA, aqui do Brasil. Sem aparecer, sem saber programar e sem
            enrolação.
          </p>
          <div className="mt-8">
            <Cta>QUERO COMEÇAR AGORA</Cta>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Acesso imediato • PDF de 17 páginas • Feito pra aplicar essa semana
          </p>
        </div>
      </header>

      <Section title="Cansado de tentar ganhar dinheiro na internet e não sair do lugar?">
        <p>Você já comprou curso e não aplicou. Já tentou dropshipping. Já travou achando que precisava aparecer, ter seguidor ou saber programar.</p>
        <p>Eu sei como é. E não é culpa sua.</p>
        <p className="rounded-2xl border-l-4 border-primary bg-card p-5 text-foreground">
          A verdade: o problema nunca foi falta de informação. Foi falta de um caminho simples pra executar.
        </p>
      </Section>

      <Section title="A IA mudou o jogo pra quem começa do zero.">
        <p>Hoje dá pra entregar serviço profissional usando IA, sem equipe e sem equipamento.</p>
        <p>
          O que falta não é a ferramenta. É saber <strong className="text-foreground">QUAL</strong> serviço vender,{" "}
          <strong className="text-foreground">COMO</strong> fazer e <strong className="text-foreground">QUANTO</strong> cobrar.
        </p>
        <p>É isso que o guia entrega mastigado.</p>
      </Section>

      <Section title="O que você leva">
        <div className="flex items-center gap-5 rounded-2xl bg-card p-6">
          <div className="flex h-24 w-18 shrink-0 items-center justify-center rounded-lg bg-primary text-3xl font-extrabold text-primary-foreground">
            7
          </div>
          <p>
            Um PDF direto ao ponto, <strong className="text-foreground">17 páginas</strong>, com 7 negócios destrinchados.
            Nada de teoria infinita: é passo a passo pra aplicar.
          </p>
        </div>
      </Section>

      <Section title="Os 7 negócios lá dentro">
        <ul className="grid gap-3 sm:grid-cols-2">
          {negocios.map(([icon, t, d], i) => (
            <li key={t} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>{icon}</span>
                <span className="text-sm font-bold text-primary">0{i + 1}</span>
              </div>
              <h3 className="mt-3 font-bold text-foreground">{t}</h3>
              <p className="mt-1 text-base">{d}</p>
            </li>
          ))}
        </ul>
        <div className="pt-4 text-center"><Cta>QUERO COMEÇAR AGORA</Cta></div>
      </Section>

      <Section title="Em cada um você tem o mapa completo">
        <ul className="space-y-3">
          {mapa.map((m) => (
            <li key={m} className="flex gap-3">
              <span className="mt-1 text-primary" aria-hidden>✓</span>
              <span className="text-foreground">{m}</span>
            </li>
          ))}
        </ul>
        <p className="rounded-2xl bg-card p-5 text-foreground">
          E no final, um <strong className="text-accent">plano de 7 dias</strong> pra você sair da teoria e fechar o primeiro cliente.
        </p>
      </Section>

      <Section title="Pra quem é (e pra quem não é)">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-primary/40 bg-card p-5">
            <h3 className="font-bold text-primary">É pra você se:</h3>
            <ul className="mt-3 space-y-2 text-base">
              <li>✓ Quer renda extra com serviço</li>
              <li>✓ Topa executar</li>
              <li>✓ Começa do zero</li>
              <li>✓ Não quer aparecer</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-bold text-foreground">Não é pra você se:</h3>
            <ul className="mt-3 space-y-2 text-base">
              <li>✕ Procura dinheiro sem esforço</li>
              <li>✕ Quer fórmula mágica</li>
              <li>✕ Não vai aplicar nada</li>
            </ul>
          </div>
        </div>
      </Section>

      <section id="oferta" className="px-5 py-14 sm:py-20">
        <div className="glow-teal mx-auto max-w-md rounded-3xl border border-primary/40 bg-card p-8 text-center">
          <h2 className="text-3xl font-extrabold text-primary">Comece hoje</h2>
          <p className="mt-2 text-muted-foreground">7 negócios que ninguém dá valor e pagam caladinho</p>
          <p className="mt-6 text-5xl font-extrabold text-foreground">R$ 14,90</p>
          <p className="mt-4 text-muted-foreground">O valor de um único cliente fechado já paga esse guia várias vezes.</p>
          <div className="mt-6"><Cta className="w-full sm:w-full">GARANTIR MEU ACESSO</Cta></div>
          <p className="mt-4 text-sm text-muted-foreground">🔒 Pagamento seguro • Acesso imediato por e-mail</p>
        </div>
      </section>

      <Section title="Perguntas frequentes">
        <div className="space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className="rounded-2xl bg-card p-5">
              <summary className="flex items-center justify-between gap-4 font-semibold text-foreground">
                {q}
                <span className="faq-icon text-2xl text-primary transition-transform" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-base">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="px-5 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <p className="text-2xl font-bold leading-snug text-foreground">
            Escolhe UM, aplica essa semana e me marca quando fechar o primeiro cliente. Vou amar ver.
          </p>
          <div className="mt-8"><Cta>QUERO O GUIA</Cta></div>
          <p className="mt-6 font-semibold text-primary">@johnviniciuss</p>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 text-center text-xs leading-relaxed text-muted-foreground">
        <p className="mx-auto max-w-xl">
          Material educativo em PDF. Este produto não garante resultado financeiro; os ganhos dependem da aplicação de
          cada pessoa. Os preços de ferramentas citados são referência e podem mudar.
        </p>
        <a href="https://instagram.com/johnviniciuss" target="_blank" rel="noopener" className="mt-4 inline-block underline hover:text-primary">
          Instagram @johnviniciuss
        </a>
      </footer>

      {/* Barra fixa de compra */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <div className="hidden flex-1 text-sm text-muted-foreground sm:block">7 negócios com IA • PDF de 17 páginas</div>
          <a href={CHECKOUT} className="cta flex-1 sm:flex-none">QUERO COMEÇAR AGORA</a>
        </div>
      </div>
    </main>
  );
}
