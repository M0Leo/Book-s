import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Book } from './entities/book.entitiy';

@Injectable()
export class BooksService {
  //Mock data
  private books: Book[] = [
    {
      id: 1,
      name: 'Beautiful World, Where Are You',
      rating: 3,
      descreption:
        'Beautiful World, Where Are You is a new novel by Sally Rooney, the bestselling author of Normal People and Conversations with Friends.Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he’d like to travel to Rome with her. In Dublin, her best friend, Eileen, is getting over a break-up and slips back into flirting with Simon, a man she has known sinceBeautiful World, Where Are You is a new novel by Sally Rooney, the bestselling author of Normal People and Conversations with Friends.Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he’d like to travel to Rome with her. In Dublin, her best friend, Eileen, is getting over a break-up and slips back into flirting with Simon, a man she has known since childhood. Alice, Felix, Eileen, and Simon are still young—but life is catching up with them. They desire each other, they delude each other, they get together, they break apart. They have sex, they worry about sex, they worry about their friendships and the world they live in. Are they standing in the last lighted room before the darkness, bearing witness to something? Will they find a way to believe in a beautiful world?',
    },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    const book = this.books.find((item) => item.id === +id);
    if (!book) {
      throw new HttpException(`Blog ${id} not found!`, HttpStatus.NOT_FOUND);
    }
    return book;
  }

  create(createBookDto: any) {
    this.books.push(createBookDto);
    return createBookDto;
  }

  update(id: string, UpdateBookDto: any) {
    const exsitingBook = this.findOne(id);
    if (exsitingBook) {
      //update entitiy
    }
  }

  remove(id: string) {
    const bookIndex = this.books.findIndex((item) => item.id === +id);
    if (bookIndex >= 0) {
      this.books.splice(bookIndex, 1);
    }
  }
}
