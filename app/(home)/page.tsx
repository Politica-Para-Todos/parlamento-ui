
import LayoutHeader from "components/Headers/LayoutHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <LayoutHeader />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href='/iniciativas'>
          <h2>Iniciativas</h2>
        </Link>
      </div>
    </main>
  </div>
  );
}
