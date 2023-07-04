import { useEffect } from "react";
export default function useDocumentTitle(title?: string) {
  useEffect(() => {
    if (!title) {
      window.document.title = "Front End Mentor Challenges";
    } else {
      window.document.title = title;
    }
  }, [title]);
}
