// src/components/Detail.jsx
import React from "react";
import "../HomePage.css";

const Detail = ({ detailData }) => {
  console.log("Detail.jsx - detailData:", detailData);
  if (!detailData) return null;

  const { title, subtitle, hits, details, skills } = detailData;

  return (
    <div className="main-content detail-content">
      <div className="detail-header">
        <h2 className="detail-title">{title}</h2>
        {subtitle && <h3 className="detail-subtitle">{subtitle}</h3>}
      </div>

      {hits && (
        <ul className="detail-list">
          {hits.map((hit, index) => (
            <li key={index} className="detail-item">
              <span className="detail-highlight">{hit.title}</span>
              <p>
                {hit.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      )}

      {details && (
        <ul className="detail-list">
          {details.map((item, index) => (
            <li key={index} className="detail-item">
              <span className="detail-highlight">{item.title}</span>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}

      {skills && (
        <ul className="detail-list">
          {skills.map((skill, index) => (
            <li key={index} className="detail-item">
              <span className="detail-highlight">{skill.name}</span>
              <p>{skill.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Detail;


