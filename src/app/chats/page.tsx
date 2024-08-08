import { Socket } from "@/components/pages";
import { AnimatedLayout } from "@/components/ui";

export default function Chats() {
  return (
    <AnimatedLayout>
      <div className="flex items-center h-full justify-center flex-col">
        <Socket />
      </div>
    </AnimatedLayout>
  );
}
