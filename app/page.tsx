import { AnimatedGridPatternDemo } from '@/components/app/animated-grid-pattern-demo';
import { MagicCardDemo } from '@/components/app/magic-card-demo';
import { ThemeToggle } from '@/components/app/theme-toggle';

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-col gap-4">
        <AnimatedGridPatternDemo />
        <MagicCardDemo />
      </div>

      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </main>
  );
}
