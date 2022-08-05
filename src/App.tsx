import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { LoginPageComponent, UserListPageComponent } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPageComponent />} />
        <Route path="/users" element={<UserListPageComponent />} />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
