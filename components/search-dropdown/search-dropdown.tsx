'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import { cn } from '@/lib/utils';
import fetcher from '@/lib/fetcher';

import { AnimeResponse } from '@/types/anime';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import AnimeCard from '@/components/search-dropdown/anime-card';
import { ScrollArea } from '@/components/ui/scroll-area';

import { Loader } from 'lucide-react';

export function SearchDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [debouncedSearch] = useDebounce(search, 500);

  const {
    data: response,
    isLoading
  }: {
    data: AnimeResponse;
    error: any;
    isLoading: boolean;
  } = useSWR(
    `https://api.jikan.moe/v4/anime?q=${debouncedSearch}&sfw&limit=5`,
    fetcher
  );

  const hasEntries = response?.data?.length && response.data.length > 0;

  return (
    <Popover open={isOpen} onOpenChange={(value) => setIsOpen(value)}>
      <div className="relative flex w-full max-w-sm flex-col items-center">
        <Input
          type="search"
          id="search"
          placeholder="Search"
          autoComplete="off"
          onClick={() => {
            setIsOpen(true);
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
        />
        <PopoverTrigger className="sr-only h-full w-full" />
      </div>

      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        sideOffset={8}
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <ScrollArea className={cn('p-4', hasEntries && 'h-[400px]')}>
          <div className="grid gap-4">
            {isLoading && (
              <div className="flex w-full justify-center">
                <Loader className="h-4 w-4 animate-spin-slow" />
              </div>
            )}

            {!isLoading &&
              (response?.data && response.data.length > 0 ? (
                response.data.map((anime) => {
                  return (
                    <Link key={anime.mal_id} href={anime.url} target="_blank">
                      <AnimeCard anime={anime} />
                    </Link>
                  );
                })
              ) : (
                <p>No results found.</p>
              ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
