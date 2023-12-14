import Link from "next/link";
import Quiz from "./project/quiz";
import Index from "./project/portfolio/index"

export default function Home() {
  return (
    <main className="min-h-screen m-10">
      <h1 className="text-[50px] font-bold">CPRG 306: Project</h1>
      <Index />
      <Quiz />

    </main>
  );
};
