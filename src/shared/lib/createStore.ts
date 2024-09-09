import { create, StateCreator } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type CreateStoreWithMiddlewaresType<T> = {
  name: string;
  store: StateCreator<T>;
};

export const CreateStoreWithMiddlewares = <T>({
  name,
  store,
}: CreateStoreWithMiddlewaresType<T>) => {
  return create(
    devtools(
      persist<T>(store, {
        name,
        storage: createJSONStorage(() => localStorage),
      }),
      {
        name,
        enabled: import.meta.env.DEV,
        anonymousActionType: `${name}/action`,
      },
    ),
  );
};
