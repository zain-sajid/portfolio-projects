'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js'
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit'
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js'
  },
  {
    value: 'remix',
    label: 'Remix'
  },
  {
    value: 'astro',
    label: 'Astro'
  }
];

export function ComboboxDemo() {
  const [value, setValue] = React.useState('');

  return (
    <Command>
      <CommandInput placeholder="Search framework..." />

      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>

        <CommandGroup>
          {frameworks.map((framework) => (
            <CommandItem
              key={framework.value}
              value={framework.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? '' : currentValue);
              }}
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0'
                )}
              />
              {framework.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
