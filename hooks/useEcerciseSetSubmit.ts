import { useState } from "react";

export const useEcerciseSetSubmit = (INIT_TITLE: string) => {
  const [title, setTitle] = useState(INIT_TITLE);
  const [submittedTitle, setSubmittedTitle] = useState<string>("");

  const handleSubmit = () => {
    setSubmittedTitle(title || INIT_TITLE);
  };

  return { title, setTitle, submittedTitle, handleSubmit };
};
