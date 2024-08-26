import { useEffect, useState } from "react"

const App = () => {
  const [serverData, setServerData] = useState("");
  useEffect(()=>{
    const CheckServer = async () =>{
      const res = await fetch("/api/welcome");
      const data = await res.json();
      setServerData(data.msg);
    }
    CheckServer();
  }, []);

  if(!serverData){
    return (
      <div className="w-full h-full flex justify-center items-center">Loading</div>
    )
  }
  return (
    <h1 className="text-3xl font-bold underline">
    Hello world! {serverData}
  </h1>
  )
}

export default App
