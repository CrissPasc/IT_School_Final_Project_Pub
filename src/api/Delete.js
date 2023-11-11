import {
  deleteMenuActionSuccess,
  deleteMenuActionFailed,
} from "../store/Udates/actionsUpdates";

export const deleteMenuApi = (id, dispatchMenu) => {
  fetch(`http://localhost:3002/menu/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      const deleteActionSucces = deleteMenuActionSuccess();
      dispatchMenu(deleteActionSucces);
    })
    .catch(() => {
      const deleteActionFail = deleteMenuActionFailed();
      dispatchMenu(deleteActionFail);
    });
};
