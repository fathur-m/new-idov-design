import { useNavigate } from "react-router-dom";
import UseRow from "../Hook/UseRow";
import Loading from "../Loading";
import RowCard from "./RowCard";

const Row = (props) => {
  const { title, category, Url } = props;
  const { data, loading, error } = UseRow(Url);
  const navigate = useNavigate();

  if (error) {
    return null;
  }

  return (
    <>
      {data && (
        <div className="flex flex-col px-4">
          <div className="flex justify-between py-0">
            <h1 className="font-medium text-lg">{title}</h1>
            <button
              className="text-sm"
              onClick={() => navigate(`/${category}`)}
            >
              Lihat Lebih {">"}
            </button>
          </div>
          <div className="py-4">
            {loading ? (
              <Loading />
            ) : (
              <RowCard data={data} loading={loading} category={category} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Row;
