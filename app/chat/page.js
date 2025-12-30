import { Assistant } from "../assistant";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (<Assistant />)}
    </>
  )
}
