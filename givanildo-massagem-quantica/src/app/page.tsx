const whatsapp = "https://wa.me/5531983698086";
const questions = [
  ["Como agendar?", "Fale com a clínica pelo WhatsApp para consultar as opções e solicitar um horário."],
  ["Quais são os valores?", "Confirme os valores diretamente com a clínica. Não exibimos preços sem dados cadastrados e atualizados."],
  ["Como é o pagamento?", "O pagamento é presencial."],
  ["É atendimento médico?", "Não. As informações são gerais e não substituem avaliação ou orientação de um profissional de saúde."],
];

export default function Home() {
  return <main className="min-h-screen bg-[#f6f3eb] text-[#18392d]">
    <header className="flex items-center justify-between px-6 py-5 md:px-16">
      <a href="#inicio" className="font-serif text-xl">Givanildo <span className="block text-xs tracking-widest">MASSAGEM QUÂNTICA</span></a>
      <nav className="hidden gap-8 text-sm md:flex"><a href="#sobre">Sobre</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="bg-[#214b3d] px-4 py-3 text-sm text-white" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
    </header>
    <section id="inicio" className="grid min-h-[70vh] md:grid-cols-2">
      <div className="flex flex-col justify-center px-7 py-16 md:px-20">
        <p className="text-xs tracking-[.25em] text-[#758969]">UM ESPAÇO PARA PAUSAR</p>
        <h1 className="my-7 font-serif text-6xl leading-none md:text-7xl">Um momento<br/>de cuidado,<br/><i className="text-[#859477]">no seu ritmo.</i></h1>
        <p className="max-w-md leading-7 text-[#5b6961]">Conheça o atendimento de Massagem Quântica com Givanildo. Para informações atualizadas sobre serviços, valores e horários, fale com a clínica.</p>
        <a className="mt-7 w-fit bg-[#214b3d] px-6 py-4 text-sm text-white" href={whatsapp} target="_blank" rel="noreferrer">Conversar no WhatsApp ↗</a>
        <p className="mt-5 text-xs text-[#788078]">Pagamento presencial</p>
      </div>
      <div role="img" aria-label="Formas orgânicas em tons naturais" className="min-h-80 bg-[radial-gradient(circle_at_55%_40%,#c8ad78_0_18%,transparent_18.5%),radial-gradient(ellipse_at_50%_70%,#617c66_0_20%,transparent_20.5%),linear-gradient(135deg,#dce2d2,#b5c2ae)]" />
    </section>
    <section id="sobre" className="mx-auto max-w-5xl px-7 py-20 md:px-12">
      <p className="text-xs tracking-[.25em] text-[#758969]">SOBRE O ATENDIMENTO</p><h2 className="my-6 font-serif text-4xl md:text-5xl">Um espaço dedicado a <i>você.</i></h2>
      <p className="max-w-2xl leading-7 text-[#5b6961]">Converse com a clínica para esclarecer dúvidas e confirmar detalhes antes de solicitar um horário. Não prometemos resultados terapêuticos e este atendimento não substitui cuidados de saúde.</p>
    </section>
    <section id="duvidas" className="bg-white px-7 py-20 md:px-16"><div className="mx-auto max-w-5xl"><p className="text-xs tracking-[.25em] text-[#758969]">PERGUNTAS FREQUENTES</p><h2 className="my-6 font-serif text-4xl">Informação clara.</h2>
      {questions.map(([q, a]) => <details key={q} className="border-t border-[#d9ddd5] py-5"><summary className="cursor-pointer font-serif text-lg">{q}</summary><p className="mt-3 max-w-2xl text-sm leading-6 text-[#5b6961]">{a}</p></details>)}
    </div></section>
    <footer className="flex flex-col gap-5 px-7 py-9 text-xs text-[#647168] md:flex-row md:items-center md:justify-between md:px-16"><span>© Givanildo · Massagem Quântica</span><span>Informações gerais; não substituem orientação profissional de saúde.</span><a className="underline" href={whatsapp} target="_blank" rel="noreferrer">Fale com a clínica ↗</a></footer>
  </main>;
}
