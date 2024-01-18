import React from "react";
import Headers from "@/components/navigation/main-nav";
import Jobs from "@/components/contact";

function Page() {
  return (
    <>
      <div className="relative">
        <Headers />
      </div>
      <main className="relative">
        <div className="w-full mt-0 absolute top-0 bg-[url(/assets/dot.png)] bg-repeat h-[100%] min-h-100vh z-10"></div>
        <div className="w-full grad-top fixed top-0 -z-10  h-[1500px] min-h-100vh "></div>
        <section className="relative ">
          <Jobs />
        </section>
      </main>
    </>
  );
}

export default Page;
