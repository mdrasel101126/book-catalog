export type IBookTypes = {
  title: string;
  author: string;
  posterId: string;
  genre: string;
  publicationDate: string;
  _id: string;
};

export type IBook = {
  book: IBookTypes;
};

export type IBooksResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: IBook[];
};

export type IProductId = {
  id: string;
};
