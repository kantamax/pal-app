import { MojipaTop } from "@/components/component/mojipa-top";
import { MojipaUnder } from "@/components/component/mojipa-under";
import { SampleData } from "@/components/component/sample-data";
import { NoFallbackError } from "next/dist/server/base-server";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-black">
      <SampleData />
      <MojipaTop />
      <MojipaUnder />
    </main>
  );
}
