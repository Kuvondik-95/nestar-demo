import { useState } from "react";


const Community = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTER!");
  let [title, setTitle] = useState<string>("Hello");
  
  return <div>
      Community {title}
      <button onClick={() => setTitle("Hello MIT24")} style={{margin: "10px", padding: "10px"}}>Press me</button>
      </div>;
}

export default Community;