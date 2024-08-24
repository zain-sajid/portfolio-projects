'use client';

import { useTheme } from 'next-themes';

import { MagicCard } from '@/components/magicui/magic-card';
import Link from 'next/link';

const sections = [
  {
    title: 'Components',
    href: '/components'
  },
  {
    title: 'Form',
    description: 'Explore the form components in this section',
    href: '/form'
  }
];

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        'flex h-[300px] w-full flex-col gap-4 lg:h-[150px] lg:flex-row'
      }
    >
      {sections.map((section, index) => (
        <Link key={index} href={section.href} className="w-full">
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-2xl shadow-2xl"
            gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
          >
            {section.title}
          </MagicCard>
        </Link>
      ))}
    </div>
  );
}
