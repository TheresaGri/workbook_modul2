import { Link } from "react-router-dom";


const StartPage = () => {
  return (
    <div className = "startpage">
      <div >
        <Link to= "/learn/startpage">Learn</Link>
      </div>
      <div>
        <Link to= "/overview">Question Overview</Link>
      </div>
    </div>
  );
}

export default StartPage;