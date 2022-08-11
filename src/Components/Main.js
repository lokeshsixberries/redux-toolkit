import LeftMain from "./LeftMain";
import RightMain from "./RightMain";
const Main = () => {
  return (
    <>
      <div className="row m-5">
        <div className="col-4">
          <LeftMain />
        </div>
        <div className="col-7">
          <RightMain />
        </div>
      </div>
    </>
  );
};

export default Main;
