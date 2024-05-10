import { ReactNode, createContext, useReducer, useContext } from "react";
import reducer from "./reducer";
import type { ComponentIDs } from "@/components/app/Editor/elements";

type Screen = {
  id: string
  title: string
  order: number
  component: ComponentIDs
  active: boolean
}

export type InitialStateType = {
  screens: Screen[]
}
const initialValue: InitialStateType = {
  screens: [],
};


const EditorContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<{ type: string; payload: Record<string, unknown> }>;
}>({ state: initialValue, dispatch: () => {} });

export default function EditorProvider({ children }: { children: ReactNode }) {
  
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorPage() {
  return useContext(EditorContext);
}
