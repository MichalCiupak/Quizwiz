export interface IUser {
  id: string;
  username: string;
  email: string;
  savedCardSets: string[]; 
}

export interface IFlashcard {
  question: string;
  answer: string;
}

export interface IFlashcardSet {
  id: string;
  name: string;
  category: string;
  keywords: string[];
  flashcards: IFlashcard[];
}
