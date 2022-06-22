// Main store file
// Needs to be cleaned up and modularized
import { useMemo } from "react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import {
  initialGlobalState,
  GlobalAction,
  globalReducer,
  globalActions,
} from "./global.module";

const initialState = {
  global: initialGlobalState,
};
type storeAction = GlobalAction;

let store: EnhancedStore<typeof initialState, storeAction> | undefined | any;

function initStore(preloadedState = initialState) {
  return configureStore({
    reducer: {
      global: globalReducer,
    },
    preloadedState,
  });
}

export const initializeStore = (preloadedState?: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export const storeActions = { globalActions };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
