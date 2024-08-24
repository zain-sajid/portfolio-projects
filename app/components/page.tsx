import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <ol>
      <li className="list-inside list-disc text-xl">
        <Link href="/components/search-dropdown" className="hover:underline">
          Search Dropdown
        </Link>
      </li>
    </ol>
  );
}
