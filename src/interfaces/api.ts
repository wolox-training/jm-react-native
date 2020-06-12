import { ApiResponse } from 'apisauce';

import { User } from './auth';
import { Book } from './book';

export type UserResponse = ApiResponse<{ data: User }, string>;

export type BooksResponse = ApiResponse<Book[], string>;
