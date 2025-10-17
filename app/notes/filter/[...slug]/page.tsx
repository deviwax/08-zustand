import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetchNotes, NotesResponse } from '@/lib/api';
import NotesClient from './Notes.client';
import type { Metadata } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  params: { slug: string[] };
}

export default async function NotesPage({ params }: Props) {
    const { slug } = await params;
    const tag = slug.length > 0 ? slug[0] : 'All';

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<NotesResponse>({
        queryKey: ['notes', 1, '', tag],
        queryFn: () => fetchNotes(1, '', tag),
    });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = params.slug.length ? params.slug[0] : 'All';

    return {
      title: `NoteHub - Notes Filtered by ${tag}`,
      description: `Viewing notes filtered by ${tag} tag`,
      openGraph: {
        title: `NoteHub - Notes Filtered by ${tag}`,
        description: `Viewing notes filtered by ${tag} tag`,
        url: `${API_URL}/notes/filter/${tag}`,
        images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
      },
    };
  }
