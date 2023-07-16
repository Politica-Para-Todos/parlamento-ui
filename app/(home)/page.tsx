import Link from "next/link";
import LayoutHeader from "../components/Headers/LayoutHeader";
import Hemicycle from "../components/Hemicycle/Hemicycle";

export default function Home() {
  return (
    <div>
      <LayoutHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Hemicycle />
        </div>
        <div>
          <Link href='/iniciativas'>
            <h2>Iniciativas</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}
