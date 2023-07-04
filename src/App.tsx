import { ProductPreviewCardComponent } from "@/projects";
import { useLoaderData } from "react-router-dom";
export default function App() {
  const data = useLoaderData() as string;
  console.log(data);
  return (
    <>
      <ProductPreviewCardComponent />
    </>
  );
}
