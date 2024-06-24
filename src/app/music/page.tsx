import Music from "@/components/pages/music";
import { AnimatedLayout } from "@/components/ui";

export default function MusicHome() {
  return (
    <AnimatedLayout>
      <div className="flex items-center h-full justify-center flex-col">
        <Music />
      </div>
    </AnimatedLayout>
  );
}
