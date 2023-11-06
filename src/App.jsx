import { RouterProvider } from "react-router-dom";
import { router } from "./route/Route";

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
