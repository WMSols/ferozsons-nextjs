import { Suspense } from "react";
import NewsroomListClient from "./NewsroomListClient";

export const metadata = {
  title: "Newsroom",
  description:
    "Stay updated with the latest news and developments from Ferozsons Laboratories.",
};

export default function NewsroomPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-12 text-center text-muted-foreground">
          Loading news...
        </div>
      }
    >
      <NewsroomListClient />
    </Suspense>
  );
}
