import { Navigation } from '@/components/Navigation';
import { Header } from '@/components/sections/Header';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { AdditionalInfo } from '@/components/sections/AdditionalInfo';
import  Contact  from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { GitHubProfile } from '@/components/GitHubProfile';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Header />
      <Education />
      <Skills />
      <Projects />
      <GitHubProfile />
      <Experience />
      <AdditionalInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
      
    </main>
  );
}