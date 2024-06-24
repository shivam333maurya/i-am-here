import { ChatGPTComponent } from "@/components/pages";
import { AnimatedLayout } from "@/components/ui";

export default function ChatGPT() {
  return (
    <AnimatedLayout>
      <div className="flex items-center h-full justify-center flex-col">
        <ChatGPTComponent />
      </div>
    </AnimatedLayout>
  );
}
