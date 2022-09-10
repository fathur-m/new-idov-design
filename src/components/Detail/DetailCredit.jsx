import { LazyLoadImage } from "react-lazy-load-image-component";
import UseCredits from "../Hook/UseCredits";
import { FaUserAlt } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/opacity.css";

const DetailCredit = (props) => {
  const { creditCategory, creditId, aktorUrl } = props;
  const { credit } = UseCredits(creditCategory, creditId);

  return (
    <div className="mxrem py-8">
      <div className="">
        <h1 className="text-2xl font-bold border-b w-fit border-ctm-blue">
          Aktor
        </h1>
        <div className="mt-4 flex h-full overflow-x-scroll overflow-y-hidden gap-2">
          {credit.cast?.map((aktor, i) => (
            <div
              key={i}
              className="text-center rounded-lg border border-ctm-blue/50"
            >
              <div className="w-[150px] h-[200px] overflow-hidden rounded-t-lg">
                {aktor.profile_path ? (
                  <LazyLoadImage
                    effect="opacity"
                    className="w-full h-full object-cover"
                    src={aktorUrl + aktor.profile_path}
                    alt={aktor.name}
                  />
                ) : (
                  <FaUserAlt className="text-7xl m-auto h-full" />
                )}
              </div>
              <div className="w-[150px] pt-2">
                <h1 className="font-bold px-2">{aktor.name}</h1>
                <h1 className="text-sm px-2 pb-2">{aktor.character}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCredit;
