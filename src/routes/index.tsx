import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import { ProductPreviewCardComponent } from "@/projects";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <div>Oops Error</div>,
  },
  {
    path: "test",
    Component: ProductPreviewCardComponent,
  },
]);

export default router;
