import { BookModel } from "@/books/model";

export interface CartModel {
  cartId: number;
  book: BookModel;
}
