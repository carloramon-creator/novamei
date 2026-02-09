import { Button } from '@/components/ui/button'
import { CheckCircle2, MessageCircle, MapPin, Mail, Check, ShieldCheck, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-novamei.jpg" alt="NovaMei" width={280} height={84} className="h-16 w-auto" priority />
          </div>
          <Link href="https://wa.me/5548984051237" target="_blank">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold gap-2">
              <MessageCircle size={18} />
              <span className="hidden sm:inline">Falar no WhatsApp</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Contabilidade <span className="text-orange-500">simples</span>,<br />
              <span className="text-orange-400">rápida</span> e feita<br />
              para <span className="text-blue-300">MEI</span>.
            </h1>
            <p className="text-xl text-blue-100 max-w-lg">
              Cuidamos da sua contabilidade para você focar no que realmente importa: vender e crescer.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-200">
                <CheckCircle2 className="text-orange-500" /> Abertura de MEI
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <CheckCircle2 className="text-orange-500" /> DAS mensal
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <CheckCircle2 className="text-orange-500" /> Declaração Anual (DASN-SIMEI)
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <CheckCircle2 className="text-orange-500" /> Regularização e baixa
              </div>
            </div>
            <div className="pt-4">
              <Link href="https://wa.me/5548984051237" target="_blank">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 h-14 shadow-lg shadow-green-900/20">
                  <MessageCircle className="mr-2" /> Falar com um contador agora
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            {/* Abstract Illustration Placeholder */}
            <div className="relative w-full aspect-square max-w-md mx-auto bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl" />
              <div className="text-center space-y-4 p-8 bg-slate-900/80 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md max-w-sm">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">MEI em dia</h3>
                <p className="text-sm text-slate-300">Sua empresa regularizada sem dor de cabeça e sem burocracia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Para quem é este site?</h2>
            <p className="text-slate-600">Se você se identifica com alguma das situações abaixo, a NovaMei é para você.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "É MEI e quer paz", desc: "Quer ficar em dia com a Receita Federal sem se preocupar com datas e boletos.", icon: ShieldCheck },
              { title: "Abriu MEI sozinho", desc: "Tem dúvidas sobre impostos, limites de faturamento e obrigações.", icon: MessageCircle },
              { title: "DAS em atraso", desc: "Está com impostos atrasados ou CNPJ suspenso e precisa regularizar.", icon: Clock },
              { title: "Baixa sem dor", desc: "Quer encerrar o CNPJ corretamente para evitar cobranças futuras.", icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Serviços para MEI</h2>
            <p className="text-slate-600">Soluções completas para todas as etapas da sua jornada empreendedora.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Abertura de MEI",
                desc: "Abrimos seu MEI corretamente, com CNAE adequado e orientação completa desde o primeiro dia.",
                highlight: "Gratuito*"
              },
              {
                title: "DAS Mensal",
                desc: "Emitimos sua guia mensal e acompanhamos pagamentos para evitar multas e problemas futuros."
              },
              {
                title: "Declaração Anual",
                desc: "Preparamos e transmitimos sua DASN-SIMEI com segurança e dentro do prazo legal."
              },
              {
                title: "Regularização",
                desc: "Regularizamos DAS em atraso, parcelamentos e situação cadastral junto à Receita Federal."
              },
              {
                title: "Baixa de MEI",
                desc: "Encerramento correto do MEI, evitando pendências futuras e cobranças indevidas."
              },
              {
                title: "Consultoria",
                desc: "Tire suas dúvidas sobre limites, contratação de funcionário e emissão de notas fiscais."
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 transition-all">
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                    <Check size={20} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex justify-between items-center">
                  {service.title}
                  {service.highlight && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{service.highlight}</span>}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold">Por que escolher a <span className="text-orange-500">novamei</span>?</h2>
              <div className="space-y-6">
                {[
                  "Especialistas em MEI",
                  "Linguagem simples, sem 'contabilês'",
                  "Atendimento rápido pelo WhatsApp",
                  "Preço justo e transparente",
                  "Atendimento 100% online"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-lg text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-blue-200 italic border-l-4 border-orange-500 pl-4 py-2">
                &quot;Aqui você fala com gente de verdade, que entende a realidade do microempreendedor.&quot;
              </p>
              <Link href="https://wa.me/5548984051237" target="_blank">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                  Conhecer Planos
                </Button>
              </Link>
            </div>
            <div className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="space-y-6">
                {/* Mockup of a conversation or dashboard */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">N</div>
                  <div className="bg-slate-700 p-3 rounded-lg rounded-tl-none text-sm text-slate-200">
                    Olá! Seu DAS desse mês já foi gerado. Segue o código de barras para pagamento. ✅
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold">V</div>
                  <div className="bg-blue-600 p-3 rounded-lg rounded-tr-none text-sm text-white">
                    Ótimo! Muito obrigado pela agilidade.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">N</div>
                  <div className="bg-slate-700 p-3 rounded-lg rounded-tl-none text-sm text-slate-200">
                    Disponha! Se precisar de ajuda com a declaração anual, é só chamar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src="/logo-novamei.jpg" alt="NovaMei" width={140} height={40} className="h-10 w-auto mb-4" />
            <p className="max-w-xs text-sm">
              Contabilidade especializada para MEI. Simplificamos sua vida para você focar no crescimento do seu negócio.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Abertura Grátis</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Regularização</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Declaração Anual</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Baixa de MEI</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MessageCircle size={16} /> WhatsApp</li>
              <li className="flex items-center gap-2"><Mail size={16} /> suporte@novamei.com.br</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Florianópolis, SC</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} NovaMei Contabilidade. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  )
}
