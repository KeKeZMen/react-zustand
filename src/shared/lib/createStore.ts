import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const createStoreWithPersist = <T>(
  storeName: string,
  storage: Storage,
  storeConfig: StateCreator<T>,
) => {
  return create(
    persist<T>(storeConfig, {
      name: storeName,
      storage: createJSONStorage(() => storage),
    }),
  );
};
