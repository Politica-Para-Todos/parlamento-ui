import LayoutHeader from "@/components/Headers/LayoutHeader";
import FetchInitiatives from "@/components/Initiatives/FetchInitiatives";

export default function Initiatives() {
  return (
    <div>
    <LayoutHeader />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FetchInitiatives />
      </div>
    </main>
  </div>
  );
}
