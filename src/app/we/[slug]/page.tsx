import { AnimatedLayout } from "@/components/ui";
import { Fragment } from "react";

export default function We({ params }: any) {
  return (
    <AnimatedLayout>
      <div className="flex flex-col items-center justify-between p-24">
        {params?.slug}
      </div>
    </AnimatedLayout>
  );
}
