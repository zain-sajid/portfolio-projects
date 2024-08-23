import { ThemeToggle } from '@/components/app/theme-toggle';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <p className="text-xl font-bold">Zain's Portfolio Projects</p>

      <div className="mb-2 flex flex-col gap-2">
        <Link href="/components">Components</Link>
        <Link href="/form">Form</Link>
      </div>

      <ThemeToggle />
    </main>
  );
}
