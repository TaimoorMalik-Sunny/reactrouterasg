import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet,useParams} from 'react-router-dom';


export default function App (){
return( 
<div>
<Router>
  <nav>
    <Link to= "/">Home</Link>
    <Link to="/Launch">Launch</Link>

  </nav>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="Launch" element={<Launch/>}>
      <Route path="/" element={<Launchindex/>}/>
      <Route path=":slug" element={<Launchshoe/>}/>
    </Route>

    <Route path="*" element={<NotFound/>}/>
    </Routes> 
  </Router>
  </div>
)
}

function NotFound(){
  return(
    <div>
      <h1>Not found</h1>
      <p>Sorry Your page was not found !</p>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Wellcome to shoes store </h1>
    </div>
  )
}

function Launch(){
  return(
    <div>
      
      <Outlet/>
    </div>
  )
}
function Launchindex(){
  return(<ul>
    {Object.entries(shoes).map(([slug,{name,img}])=> 
    <li key={slug}>
      <Link to={`/Launch/${slug}`}>
      <h2>{name}</h2>
    <img src={img} alt={name}/>
    </Link>
    </li>)}
  </ul>
  );
 
}

function Launchshoe(){
  const {slug} = useParams();
  const shoe = shoes[slug];
  if (!shoe){
    return<h1>Not found any result !</h1>
  }

  const {name ,img} = shoe;
  return(
<div>
    <h2>
      {name}
    </h2>
    <img src={img} alt={name}/>

    </div>  

  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};