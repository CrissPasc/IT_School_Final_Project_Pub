import {
  addToMenuError,
  addToMenuSuccess,
} from "../store/Udates/actionsUpdates";

export const addMenu = (data, dispatch) => {
  fetch("http://localhost:3002/menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      const functionOfAddSuccess = addToMenuSuccess();
      dispatch(functionOfAddSuccess);
      return;
    })
    .catch(() => {
      const functionOfAddError = addToMenuError();
      dispatch(functionOfAddError);
      return;
    });
};
