import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { FadeIn } from '@/components/FadeIn';
import { CtaButton } from '@/components/CtaButton';
import { Instagram } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-abyss text-clean-white overflow-x-hidden">
      <Navigation />

      <main>
        <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 md:pt-32">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <p className="font-sans uppercase tracking-[0.35em] text-soft-violet mb-6 text-sm md:text-base">The Overtone Theory</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-clean-white">
                <span className="block">Let's get you</span>
                <span className="block text-signal-gold">back in the flow.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-6 text-lg md:text-xl font-serif text-clean-white/90">
                <p>In the physics of music and electronics, an overtone is a frequency that exists naturally above the fundamental note. You don't force overtones into existence. It just happens. However, with the right conditions — specific vibrations, tuned resonance — the overtones can be shaped and selected.</p>
                <p>Your creativity works the same way.</p>
                <p>You already have everything you need to create. The influences, the experiences, the emotions, the skill. It's all there, a unique perspective with unfathomable depth. But something is dampening the signal. Self-criticism, fear of judgement, creative habits that stopped working years ago, a disconnection between what you feel and what you make.</p>
                <p className="font-semibold text-purple-reign">Let's be real: It's hard out there in the real life. It can be real hard to feel creative.</p>
                <p>The Overtone Theory is a practice I've developed over 15+ years of working with musicians, artists, and creators of all kinds. It combines guided imaginative exercises, meditation, and compassionate conversation to help you reconnect with your creative self.</p>
                <p>I don't teach you how to make art. You already know how. I help you get out of your own way so your art can come through honestly.</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-soft-violet">Your body is an antenna.</h3>
              <div className="space-y-6 text-lg md:text-xl font-serif text-clean-white/90">
                <p>This isn't a metaphor. Your brain converts chemical energy into electrical signals. Your muscles operate on electrical impulse. Your brain and fascia are literally piezoelectric — they generate a measurable electric field through movement. Your body produces and exists within its own electromagnetic field.</p>
                <p>You — the one piloting your meat suit — you are the one making sense of the signals your body receives. Like tuning a radio, you get to choose what frequency you're paying attention to. The antenna doesn't care if it's picking up jazz, static, or silence. It just receives whatever's in the field.</p>
                <p>You are the choice-maker. You decide what to tune into.</p>
                <p>When you're creatively blocked, you're just tuned to the wrong station. The signal is still there. You've just lost the frequency.</p>
                <p className="font-sans font-bold text-xl text-signal-gold pt-4">The Overtone Theory helps you tune back in.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="process" className="py-24 md:py-32 px-6 bg-clean-white">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-abyss text-center">The 4 Steps (because capitalism tells me y'all like it when folks turn a process into easy steps)</h2>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
