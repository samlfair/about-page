import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import "./App.css";
import { Date, Link, RichText } from "prismic-reactjs";
// import Slice from "./components/Slice";
// import Header from "./components/Header";
const apiEndpoint = "https://blog-smile.cdn.prismic.io/api/v2";
const accessToken = process.env.REACT_APP_PRISMIC_ACCESS_TOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken });

function App() {
  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.getSingle(`about_page`);
      setDocData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="page">
        {!doc && <div id="loading">Loading...</div>}
        {doc && (
          <>
            {/* <Header title={doc.title} subheading={doc.subheading} /> */}

            {doc.body.map((section) => {
              if (section.slice_type) return <Slice slice={section} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
