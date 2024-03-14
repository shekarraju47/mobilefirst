import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useNavigate();

  const Logout = () => {
    localStorage.removeItem("userDetails");
    location("/login");
  };

  const getData = async () => {
    setLoading(true);
    const url =
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";
    const res = await fetch(url);
    const fetchdata = await res.json();
    setData(fetchdata.jokes);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const nextJokes = () => {
    getData();
  };

  return (
    <div>
      <h1 className="text-center fw-bold">Jokes</h1>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <TailSpin className="mt-5" color="#36d7b7" />
        </div>
      ) : (
        <>
          <div>
            <ul className="p-0 list-group bg-secondary p-2 m-2">
              {data.map((item) => (
                <li
                  className="fw-bold text-primary border-2 border-dark list-group-item rounded p-2 m-2"
                  key={item.id}
                >
                  {item.joke}
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-center">
              <button className="m-2 btn btn-success" onClick={nextJokes}>
                Next Page
              </button>
              <button onClick={Logout} className="m-2 btn btn-danger">
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
