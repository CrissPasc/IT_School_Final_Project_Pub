import {
  deleteMenuActionSuccess,
  deleteMenuActionFailed,
} from "../store/Udates/actionsUpdates";

export const deleteMenuApi = (id, dispatch) => {
  fetch(`http://localhost:3002/menu/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      const deleteActionSucces = deleteMenuActionSuccess();
      dispatch(deleteActionSucces);
    })
    .catch(() => {
      const deleteActionFail = deleteMenuActionFailed();
      dispatch(deleteActionFail);
    });
};
