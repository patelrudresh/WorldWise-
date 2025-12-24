import {  useNavigate, useSearchParams } from "react-router-dom"

function Map() {

    const navigate   =useNavigate()
    const [searchParam,setSearchParam ]=useSearchParams();
    const lat=searchParam.get("lat");
   const lng=searchParam.get("lng");
  return (
    <div onClick={()=>navigate("form")} >
      <h1>Map </h1>
      <h2>Position: {lat} {lng}</h2>
      <button onClick={()=>setSearchParam({lat:20,lng:30})}>changeProps</button>
    </div>
  )
}

export default Map
