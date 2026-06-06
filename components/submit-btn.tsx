import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex h-12 w-32 scale-110 items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-hidden transition-all hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-gray-900/65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {" "}
          Submit
          <FaPaperPlane className="opacity-70 transition group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
        </>
      )}
    </button>
  );
}
