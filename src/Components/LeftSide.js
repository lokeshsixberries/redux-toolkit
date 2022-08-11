import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiData } from "../Slice/ApiSlice";
export default function LeftSide() {
  const [quotes, setQuotes] = useState("");

  const Apicall = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setQuotes(res?.data?.fact);
    });
    dispatch(getApiData(quotes));
  };

  const apiState = useSelector((state) => state.userReducer.details);
  console.log(apiState);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card text-bg-primary m-5" style={{ width: "90%" }}>
        <div className="card-body">
          <ul className="list-group list-group-flush">{apiState}</ul>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-warning mx-5"
        onClick={() => Apicall()}
      >
        GetData
      </button>
    </>
  );
}
