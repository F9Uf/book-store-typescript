export interface BookModel {
  id: number;
  title: string;
  price: number;
  img: string;
}

export interface CartModel {
  itemNo: number;
  book: BookModel;
}

export interface GroupCartModel {
  number: number;
  book: BookModel;
}
