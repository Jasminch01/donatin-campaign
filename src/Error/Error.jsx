import { Link} from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <div>
          <p className="text-2xl font-semibold text-center">Opps Page Not Found !!</p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link to="/" className="p-3 rounded bg-green-400 text-white">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
