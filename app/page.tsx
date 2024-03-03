"use client";

const MapsApp = dynamic(() => import("./Components/MapsApp"), {
  ssr: false,
});

export default function Home() {
  return (
   <main className ="w-full h-full">
      <MapsApp />
   </main>
  );
}
