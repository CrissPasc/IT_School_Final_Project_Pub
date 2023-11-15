import { addMenu } from "../../api/Add";
import { deleteMenuApi } from "../../api/Delete";

export const initialStateMenu = {
  menu: [],
  displayAddMenuMessage: false,
  addMenuMessage: "",
  isLoading: false,
  isLoadingDelete: false,
  isDeleted: false,
  deleteMessageFail: "",
};

export function menuReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_MENU": {
      let newState;

      addMenu(action.payload, action.otherValue);
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }
    case "ADD_TO_MENU_SUCCESS": {
      let newState;

      newState = {
        ...state,
        isLoading: false,
        addMenuMessage: "POST request successful",
        displayAddMenuMessage: true,
      };

      return newState;
    }
    case "ADD_TO_MENU_ERROR": {
      let newState;

      newState = {
        ...state,
        isLoading: false,
        addMenuMessage: "POST request failed",
        displayAddMenuMessage: true,
      };
      return newState;
    }
    case "CLOSE_MESSAGE": {
      const newState = {
        ...state,
        displayAddMenuMessage: false,
        addMenuMessage: "",
      };
      return newState;
    }
    case "DELETE_MENU": {
      let localState;
      deleteMenuApi(action.payload, action.otherFunctionThatINeedOnDelete);
      localState = {
        ...state,
        isLoadingDelete: true,
      };
      console.log(localState, "localState");
      console.log(state, "state");
      console.log(action, "action");
      console.log(action.payload, "action.payload");
      // aici imi vine action.payload = Sweet calamari burger -- adica name si nu id ..
      return localState;
    }
    case "DELETE_MENU_SUCCESS": {
      let localState;
      localState = {
        ...state,
        isLoadingDelete: false,
        isDeleted: true,
      };
      console.log(
        localState,
        "localState",
        state,
        "state",
        action.payload,
        "action.payload"
      );
      // aici imi vine action.payload = UNDEFINED???
      return localState;
    }
    case "DELETE_MENU_FAILED": {
      let localState;
      localState = {
        ...state,
        isLoadingDelete: false,
        isDeleted: false,
        deleteMessageFail: "This can't be deleted",
      };

      return localState;
    }
    case "RESET_DELETE": {
      let localState;
      localState = {
        ...state,
        isDeleted: false,
        deleteMessageFail: "",
      };

      return localState;
    }

    // Nu uitam ca in cazul default sa returnam state-ul anterior, nemodificat!
    default:
      return state;
  }
}
