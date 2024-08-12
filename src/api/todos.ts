import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 876;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const createTodo = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, { userId, title, completed });
};

export function deleteTodo(todoId: number | undefined) {
  return client.delete(`/todos/${todoId}`);
}

export const upDateTodo = (id: number, data: Partial<Todo>) => {
  return client.patch(`/todos/${id}`, data);
};

// Add more methods here
