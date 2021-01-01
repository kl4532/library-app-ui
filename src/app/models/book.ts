export interface Book {
  id: number;
  title: string;
  author_first_name: string;
  author_last_name: string;
  year: number;
  category: string;
  available_copies: number;
  booked_copies: number;
}
