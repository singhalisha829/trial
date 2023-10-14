import { useEffect, useState } from "react"
import axios from "axios";
import Router from "next/router";
import useSWR, { mutate } from 'swr';
import { output } from "@/next.config";

const fetcher = (url) => fetch(url
//   {
//   headers:{
//     Authorization: `token 7ba76f2fed364f15b25c2a6daa8546c436fad095`,
//       'Content-Type': 'application/json',
//   }
// }
).then((res) => res.json());

export default function Home() {
  const [displayData, setDisplayData] = useState(null);
  const [anotherData,setAnotherData] = useState(null);
  // useEffect(()=>{


  //   axios.get("https://requestly.dev/api/mockv2/test-url?rq_uid=QzMeposf72WqMqRqnjVGKrh18M12").then(res=>{
  //     // const obj=res.data.replace(/'/g, '"');

  //     setDisplayData(res.data)
  //     console.log(res)
  //   })
  // },[])

  const { data, error, isLoading } = useSWR('https://requestly.dev/api/mockv2/test-url?rq_uid=QzMeposf72WqMqRqnjVGKrh18M12', fetcher)

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
   <main className="p-2">
    Name:{displayData?.name}<br/>
    Details:{displayData?.detail}<br/><br />
    <button className="bg-buttongrey rounded-sm" onClick={()=>Router.push('/nextPage')}>Go To Next Page</button><br /><br />
    {/* {displayData?.length > 0?displayData.map(data=>(<span key={data.id}>{data.name}<br /></span>)):null} */}

    {data.map(data=>(<span key={data.id}>{data.name}<br /></span>))}

   </main>
  )
}
