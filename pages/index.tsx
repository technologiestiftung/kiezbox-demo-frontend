import "../app/globals.css";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
      <h1 className="text-xl mb-8">Kiezbox Notruf</h1>
      <p>
        <strong>Wie finde ich die Katastrophen-Leuchttürme?</strong>
        <br />
        Im Bezirk Tempelhof Schöneberg sind die Kat-Leuchttürme am Rathaus
        Schöneberg, Rathaus Tempelhof und am Gemeinschaftshaus Lichtenrade
        vorgesehen. Diese Standorte sollen durch Kennzeichnung an den Gebäuden,
        ggf. durch die Veröffentlichung einer Pressemitteilung und durch
        Bekanntgabe auf der Internetseite des Bezirks der Bevölkerung im Vorfeld
        bekanntgegeben werden.
        <br />
        <br />
        <strong>
          Wie lange bleiben die Leuchttürme bei einem blackout online?
        </strong>
        <br />
        Die beiden Rathäuser sind mit fest installierten Notstromaggregaten
        ausgestattet, das Rathaus Schöneberg mit einer Laufzeit von 55 Stunden
        und das Rathaus Tempelhof mit einer Laufzeit von 120 Stunden. Für das
        Gemeinschaftshaus Lichtenrade wurde im Rahmen der Beschaffung der
        Ausstattung für die Kat-Leuchttürme seitens der Senatsverwaltung für
        Inneres, Digitalisierung und Sport ein mobiles Notstromaggregat
        beschafft, das eine Laufzeit von 12 Stunden mit einer Tankfüllung
        erzielen kann.
        <br />
        <br />
        <strong>
          Was sollte ich tuen, um mich bei einem blackout möglichst lange zu
          versorgen?
        </strong>
        <br />
        Kühlschränke und Kühltruhen zulassen. Ab dem dritten Tag alle
        Lebensmittel ausräumen, verbrauchen oder entsorgen. Dann die
        Kühlschranktür offenstehen lassen, sonst muss auch das Kühlgerät
        entsorgt werden.
        <br /> Solange Wasser noch aus den Leitungen kommt, diese in Gefäßen
        umfüllen.
      </p>
      <br />
      <div className="flex flex-col gap-4">
        <Link href="/emergency">Hier Notruf Absetzen →</Link>
        <Link href="/inbox">Zum Notruf Ticker →</Link>
      </div>
    </main>
  );
}
