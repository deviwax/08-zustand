import CreateNoteClient from './CreateNoteClient';
import { createNoteAction } from './action';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const metadata = {
  title: 'NoteHub - Create Note',
  description: 'Create a new note in NoteHub',
  openGraph: {
    title: 'NoteHub - Create Note',
    description: 'Create a new note in NoteHub',
    url: `${API_URL}/notes/action/create`,
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function CreateNotePage() {
  return <CreateNoteClient action={createNoteAction} />;
}
