import { useState } from "react";

export const usePlankFormState = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  const [submittedTitle, setSubmittedTitle] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  return {
    title,
    isSubmitted,
    submittedTitle,
    setTitle,
    setIsSubmitted,
    setSubmittedTitle,
  };
};
