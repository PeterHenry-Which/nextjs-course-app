import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return (
    <>
      <h1>Note page params</h1>
      {params && params.map((x) => <h2 key={x}>id {x}</h2>)}
    </>
  );
};

export default Page;
