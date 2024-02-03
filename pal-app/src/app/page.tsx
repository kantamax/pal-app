import { MojipaTop } from "@/components/component/mojipa-top";
import { MojipaUnder } from "@/components/component/mojipa-under";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MojipaTop />
      <MojipaUnder />
    </main>
  );
}
