import React, { useState, useEffect } from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import axios from "axios";
export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODhmZTEzNTM1ZWY1OGQwMmY5ZWJmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQ0MzE0MSwiZXhwIjoxNjM2ODc1MTQxfQ.eHyWFLCHXpLmXHNgDpd9TyU42B5tA6jsYSDyABvRub0",
            },
          }
        );
        setLists(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}
