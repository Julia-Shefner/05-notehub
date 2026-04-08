import axios from "axios";
import type { Note, CreateNote } from "../types/note";

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}
interface FetchNotesParams {
  page: number;
  search: string;
}

const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;
const axiosInstance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: { Authorization: `Bearer ${myKey}` },
});

export const fetchNotes = async ({
  page,
  search,
}: FetchNotesParams): Promise<NotesHttpResponse> => {
  const response = await axiosInstance.get<NotesHttpResponse>("/notes", {
    params: {
      page,
      perPage: 12,
      search,
    },
  });
  return response.data;
};

export const createNote = async (values: CreateNote): Promise<Note> => {
  const response = await axiosInstance.post<Note>("/notes", values);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axiosInstance.delete<Note>(`/notes/${id}`);
  return response.data;
};
