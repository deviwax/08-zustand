import { useRouter } from 'next/navigation';
import NoteForm from '@/components/NoteForm/NoteForm';
import css from './page.module.css';
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

export default function CreateNote() {
  const router = useRouter();

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm onClose={() => router.back()} action={createNoteAction} />
      </div>
    </main>
  );
}
