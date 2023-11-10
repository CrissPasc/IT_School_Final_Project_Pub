export function closeMessage() {
  return {
    type: "CLOSE_MESSAGE",
  };
}

export function addToMenu(menu, dispatch) {
  return {
    type: "ADD_TO_MENU",
    payload: menu,
    otherValue: dispatch,
  };
}

export function addToMenuSuccess() {
  return {
    type: "ADD_TO_MENU_SUCCESS",
  };
}

export function addToMenuError() {
  return {
    type: "ADD_TO_MENU_ERROR",
  };
}

export function deleteMenuAction(id, dispatch) {
  return {
    type: "DELETE_MENU",
    payload: id,
    otherFunctionThatINeedOnDelete: dispatch,
  };
}

export function deleteMenuActionSuccess() {
  return {
    type: "DELETE_MENU_SUCCESS",
  };
}

export function deleteMenuActionFailed() {
  return {
    type: "DELETE_MENU_FAILED",
  };
}

export function deleteReset() {
  return {
    type: "RESET_DELETE",
  };
}
