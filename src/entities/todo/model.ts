import { baseAxios } from "@shared";
import { create } from "zustand";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type TodoStoreStateType = {
  todos: ITodo[];
};

type TodoStoreActionsType = {
  getTodos: () => Promise<void>;
};

export type TodoStoreType = TodoStoreStateType & TodoStoreActionsType;

export const useTodoStore = create<TodoStoreType>((set) => ({
  todos: [],
  getTodos: async () => {
    const res = await baseAxios.get("/todos");
    set(() => ({ todos: res.data }));
  },
}));
