import { getAllBoard, getDefinition } from "@/api";
import { MojipaTop } from "@/components/component/mojipa-top";
import { MojipaUnder } from "@/components/component/mojipa-under";

export default async function Home() {
  const boards = await getAllBoard();
  const definition = await getDefinition();
  //console.log(boards);

  return (
    <main className="flex flex-col justify-between bg-black">
      <MojipaTop definition={definition} />
      <MojipaUnder boards={boards} />
    </main>
  );
}
