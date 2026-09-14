import type { Metadata } from "next";
import { PublicLayout } from "@/components/layout/public-layout";
import { CoursesContent } from "@/components/courses/courses-content";

export const metadata: Metadata = {
  title: "Programs | skilloopz",
  description:
    "Explore practical, mentor-led skilloopz programs built for your next career move.",
};

export default function CoursesPage() {
  return (
    <PublicLayout>
      <CoursesContent />
    </PublicLayout>
  );
}
