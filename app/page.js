import Hero from '@/components/home/hero';
import Navbar from '@/components/nav/navbar';
import TransformSDLC from '@/components/sections/transform-sdlc';
import WhyTeamsChoose from '@/components/sections/why-teams-choose';
import WorksWithTools from '@/components/sections/tools';
import QuickSetup from '@/components/sections/quick-setup';
import Footer from '@/components/footer/footer';
import Builder from "@/components/sections/build-software";


export default function Page() {
  return (
    <main className="isolate relative">
      <Hero />
      <TransformSDLC />
      <WhyTeamsChoose />
      <WorksWithTools />
      <QuickSetup />
      <Builder />
      <Footer />
    </main>
  );
}
