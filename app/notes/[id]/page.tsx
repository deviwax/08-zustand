'use client';

import React, { use } from 'react';
import NoteModal from '@/components/NoteModal';
import { fetchNoteById } from '@/lib/api';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return <NoteModal id={id} />;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const note = await fetchNoteById(params.id);

  return {
    title: `NoteHub - Note: ${note.title}`,
    description: note.content.slice(0, 160),
    openGraph: {
      title: `NoteHub - Note: ${note.title}`,
      description: note.content.slice(0, 160),
      url: `https://your-site-url.com/notes/${params.id}`,
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}