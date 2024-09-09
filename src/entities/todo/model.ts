import { baseAxios, CreateStoreWithMiddlewares } from "@shared";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

type TodosStoreStateType = {
  todos: ITodo[];
};

type TodosStoreActionsType = {
  loadTodos: () => Promise<void>;
  addTodo: (title: string) => void;
  toogleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  changeTodoText: (id: number, newTitle: string) => void;
  deleteCompleted: () => void;
  completeAll: () => void;
};

export type TodosStoreType = TodosStoreStateType & TodosStoreActionsType;

export const useTodoStore = CreateStoreWithMiddlewares<TodosStoreType>({
  name: "todos",
  store: (set, get) => ({
    todos: [],
    loadTodos: async () => {
      const res = await baseAxios.get("/todos?_limit=10");
      set(() => ({ todos: res.data }));
    },
    addTodo: (title: string) => {
      const newTodo: ITodo = {
        completed: false,
        id: Date.now(),
        title,
      };
      set(() => ({ todos: [...get().todos, newTodo] }));
    },
    toogleTodo: (id: number) => {
      set(() => ({
        todos: get().todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      }));
    },
    removeTodo: (id: number) => {
      set(() => ({
        todos: get().todos.filter((todo) => todo.id !== id),
      }));
    },
    changeTodoText: (id: number, newTitle: string) => {
      set(() => ({
        todos: get().todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo,
        ),
      }));
    },
    deleteCompleted: () => {
      set(() => ({
        todos: get().todos.filter((todo) => !todo.completed),
      }));
    },
    completeAll: () => {
      const isAllTodosCompleted = get().todos.every((todo) => todo.completed);
      set(() => ({
        todos: get().todos.map((todo) =>
          isAllTodosCompleted
            ? { ...todo, completed: false }
            : { ...todo, completed: true },
        ),
      }));
    },
  }),
});
