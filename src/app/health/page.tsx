import { ComingSoon } from "@/components/pages";
import { AnimatedLayout } from "@/components/ui";
// import { usePathname } from "next/navigation";
export default function HealthHome() {
  // console.log(usePathname());
  return (
    <AnimatedLayout>
      <ComingSoon />
    </AnimatedLayout>
  );
}
