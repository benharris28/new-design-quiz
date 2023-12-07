'use client'
import { useState } from 'react';
import websiteData from '../../data.json'; // Adjust the path to your JSON file

interface Website {
  websiteName: string;
  screenshotUrl: string;
  websiteID: number; // websiteID is a number
}

interface Response {
  websiteName: string;
  screenshotUrl: string;
  response: string;
  websiteID: number; // websiteID is a number here as well
}

// Submit responses from state and array of websites in json file to openAI assistant API

const Quiz: React.FC = () => {
  const [currentWebsiteIndex, setCurrentWebsiteIndex] = useState<number>(0);
  const [userResponses, setUserResponses] = useState<Response[]>([]);
  const [hasResponded, setHasResponded] = useState<boolean>(false);

  console.log(userResponses)

  const handleResponse = (likeOrDislike: string) => {
    const currentWebsite = websiteData[currentWebsiteIndex];
    setUserResponses([...userResponses, {
      websiteName: currentWebsite.websiteName, 
      response: likeOrDislike,
      websiteID: currentWebsite.websiteID, // Add the websiteID here
      screenshotUrl: currentWebsite.screenshotUrl
    }]);
    setHasResponded(true);
  };

  const loadNextWebsite = () => {
    if (currentWebsiteIndex < websiteData.length - 1) {
      setCurrentWebsiteIndex(currentWebsiteIndex + 1);
      setHasResponded(false);
    } else {
      // Submit data to OpenAI here or set state to show results
    }
  };

  const isLastWebsite = currentWebsiteIndex === websiteData.length - 1;

  return (
    <div className="p-4">
      <p className="text-lg mb-4">Please scroll through this webpage and tell us if you like it.</p>
      <img src={websiteData[currentWebsiteIndex].screenshotUrl} alt="Website Screenshot" className="w-full h-auto mb-16" />
      <div className="fixed inset-x-0 bottom-0 bg-white p-4 shadow-md">
        <p className="text-lg">Do you like this website?</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded mr-4" onClick={() => handleResponse('like')}>Yes</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => handleResponse('dislike')}>No</button>
        {hasResponded && !isLastWebsite && 
          <button className="bg-blue-500 text-white py-2 px-4 rounded ml-4" onClick={loadNextWebsite}>Next Website</button>
        }
        {hasResponded && isLastWebsite && 
          <button className="bg-blue-500 text-white py-2 px-4 rounded ml-4" onClick={loadNextWebsite}>Show me results</button>
        }
      </div>
    </div>
  );
}

export default Quiz;
