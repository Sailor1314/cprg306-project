import Link from "next/link";
import MyComp from "./StudentInfo";

export default function Home() 
  return (
    <main>
      <h1 className="text-[50px] font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <MyComp />
      <ul>
        <li><Link href="project">Project</Link></li>
      </ul>
    </main>
  );
