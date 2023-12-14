import Link from "next/link";
import Quiz from "./project/quiz";

export default function Home() {
  return (
    <main className="min-h-screen m-10">
      <h1 className="text-[50px] font-bold">CPRG 306: Project</h1>
      <Quiz />

    </main>
  );
};
