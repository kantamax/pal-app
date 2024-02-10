import { getAllBoard } from "@/api";
import { MojipaTop } from "@/components/component/mojipa-top";
import { MojipaUnder } from "@/components/component/mojipa-under";

export default async function Home() {
  const boards = await getAllBoard();
  //console.log(boards);

  return (
    <main className="flex flex-col justify-between bg-black">
      <MojipaTop />
      <MojipaUnder boards={boards} />
    </main>
  );
}
