import { HomeNavigation, WelcomePage } from "@/components/pages";
import { AnimatedLayout } from "@/components/ui";
export default function Welcome() {
  return (
    <AnimatedLayout>
      <div className="h-full flex flex-col">
        <WelcomePage />
        <HomeNavigation />
        {/* <TestModule /> */}
      </div>
    </AnimatedLayout>
  );
}
