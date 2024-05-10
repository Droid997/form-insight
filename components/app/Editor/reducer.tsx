import type { InitialStateType } from "./context";
import { ComponentIDs } from "./elements";

export const actionTypes = {
  ADD_SCREEN: "ADD_SCREEN",
  MARK_SCREEN_ACTIVE: "MARK_SCREEN_ACTIVE",
  CHANGE_ELEMENT: "CHANGE_ELEMENT",
};

function addScreen(state: InitialStateType, action: any) {
  const { component, id, title = "" } = action.payload;
  const newScreen = {
    id,
    component,
    title,
    order: state.screens.length + 1,
    active: false,
  };

  let { screens } = { ...state };
  const screenRef = state.screens.find((ele) => ele.id == id);
  if (!screenRef) screens.push(newScreen);

  screens = screens.map((ele) => {
    if (ele.id !== id) return { ...ele, active: false };
    return { ...ele, active: true };
  });

  return { ...state, screens };
}

function markScreenActive(state: InitialStateType, action: any) {
  const { id } = action.payload;
  const screens = state.screens.map((screen) => {
    if (screen.id !== id) return { ...screen, active: false };
    return { ...screen, active: true };
  });
  return { ...state, screens };
}

function changeElement(
  state: InitialStateType,
  action: { payload: { elementType: ComponentIDs } }
) {
  let { screens } = { ...state };
  screens = screens.map((ele) => {
    if (!ele.active) return ele;

    return { ...ele, component: action.payload.elementType };
  });
  return { ...state, screens };
}
const reducer = (
  state: InitialStateType,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case actionTypes.ADD_SCREEN:
      return addScreen(state, action);
    case actionTypes.MARK_SCREEN_ACTIVE:
      return markScreenActive(state, action);
    case actionTypes.CHANGE_ELEMENT:
      return changeElement(state, action);
    default:
      return { ...state };
  }
};

export default reducer;
