import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { History } from '@/components/sections/History';
import { Mission } from '@/components/sections/Mission';
import { Approach } from '@/components/sections/Approach';
import { Values } from '@/components/sections/Values';
import { Team } from '@/components/sections/Team';
import { Services } from '@/components/sections/Services';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#historia">
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <History />
        <Mission />
        <Approach />
        <Values />
        <Team />
        <Services />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
