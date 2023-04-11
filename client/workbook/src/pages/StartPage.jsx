import { Link } from "react-router-dom";


const StartPage = () => {
  return (
    <div>
      <div>
        <Link to= "/learn">Learn</Link>
      </div>
      <div>
        <Link to= "/overview">Question Overview</Link>
      </div>
    </div>
  );
}

export default StartPage;