import "../app/globals.css";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Kiezbox Emergency</h1>
      <div className="flex flex-col gap-4">
        <Link href="/emergency">Emergency Form →</Link>
        <Link href="/inbox">Emergency Inbox →</Link>
      </div>
    </main>
  );
}
