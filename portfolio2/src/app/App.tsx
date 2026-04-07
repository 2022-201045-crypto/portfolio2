import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ChatWidget } from "./components/ChatWidget";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ChatWidget />
    </>
  );
}
