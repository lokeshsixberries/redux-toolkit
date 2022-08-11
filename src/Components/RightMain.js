import { useSelector } from "react-redux";
const RightMain = () => {
  const userState = useSelector((state) => state.userReducer.userArray);
  return (
    <>
      <div className="card mt-4 h-auto">
        <div className="card-body">
          {userState.map((item) => {
            return (
              <>
                <div
                  className="alert alert-primary alert-dissmissible"
                  role="alert"
                >
                  <span>{item.username}</span>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    style={{ position: "absolute", right: "15px" }}
                  ></button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RightMain;
