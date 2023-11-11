import { Route, Routes } from "react-router-dom";
import HomeAdmin from "../admin/HomeAdmin";

// este folosit pe undeva???
function AdminRouter() {
  return <Route path="/admin" element={<HomeAdmin />}></Route>;
}

export default AdminRouter;
