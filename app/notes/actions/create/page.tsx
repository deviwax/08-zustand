import NoteForm from '@/components/NoteForm/NoteForm';
import css from './page.module.css';

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
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        < NoteForm onClose={close} />
      </div>
    </main>
  );
}