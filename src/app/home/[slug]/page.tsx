import { Fragment } from "react";

export default function S({ params }: any) {
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {params?.slug}
      </div>
    </Fragment>
  );
}
