'use client'

import React from 'react';

interface Response {
  websiteName: string;
  screenshotUrl: string;
  thumbnailUrl: string;
  response: string;
  websiteID: number;
}

interface ResultsProps {
  userResponses: Response[];
}

const Results: React.FC<ResultsProps> = ({ userResponses }) => {
  const likedWebsites = userResponses.filter(response => response.response === 'like');

  return (
    <div className="grid grid-cols-3 gap-4">
        <div>Sites that you liked</div>
      {likedWebsites.map((website, index) => (
        <div key={index} className="p-4 shadow-lg rounded-lg">
          <img src={website.thumbnailUrl} alt={website.websiteName} className="w-full h-auto mb-4"/>
          <p>{website.websiteName}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
