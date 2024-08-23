import Image from 'next/image';
import { Anime } from '@/types/anime';
import { Card, CardContent } from '@/components/ui/card';

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex cursor-pointer p-0 hover:bg-muted">
        <Image
          src={anime.images.webp.image_url}
          alt="Preview image"
          height={100}
          width={80}
          className="min-h-[100px] object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold">{anime.title}</h2>
          <p className="text-sm text-foreground">
            {anime.genres.map((genre) => genre.name).join(', ')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
