// import FormWithoutReactHookForm from "@/components/form-without-rhf";
// import FormWithReactHookForm from "@/components/form-with-rhf";
// import FormWithReactHookFormAndZod from "@/components/form-with-rhf-and-zod";

import FormWithReactHookFormAndZodAndServer from "@/components/form-with-rhf-and-zod-and-server";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <FormWithoutReactHookForm /> */}
      {/* <FormWithReactHookForm /> */}
      {/* <FormWithReactHookFormAndZod /> */}
      <FormWithReactHookFormAndZodAndServer />
    </main>
  );
}
