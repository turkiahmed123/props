import React from "react";

export default function bio() {
  const styleObject = { color: "white", textAlign: "center" };

  return (
    <div style={styleObject} className="banner-text" id="bio">
      <h1 style={{ marginTop: "40px" }}> Bio </h1>
      <p style={{ fontWeight: "bold", fontSize: "60px" }}>Turki Ahmed</p>
      <p style={{ fontSize: "30px" }}>full stack web developer</p>
      <p>
      <p style={{ fontSize: "30px" }}>Outils:</p>
        <br />
        Chrome DevTools ,Visual Studio Code ,FileOptimizer ,Bootstrap ,GitHub
        <br />
        <p style={{ fontSize: "30px" }}>Frameworks:</p>
        <br />
        Hadoop(HDFS, Pig, Hive, HBase), Spark, JEE , Symfony2/4.
        <br />
        <p style={{ fontSize: "30px" }}>Base de données:</p>
        <br />
        MySQL, SQL server, PostgreSQL.
        <br />
        <p style={{ fontSize: "30px" }}>Langages:</p>
        <br />
        HTML 5 ,CSS ,JavaScript ,PHP.
        <br />
        <p style={{ fontSize: "30px" }}>Méthodologies:</p>
        <br />
        Agile SCRUM, 2UP, Cycle en V, Merise, GIMSI, Ralph Kimball.
      </p>
    </div>
  );
}
