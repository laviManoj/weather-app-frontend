
import React from 'react';
import { ChevronDown, Sun } from 'lucide-react';


function HourlyForecast ({ forecast }) {

    return(
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 w-80 mb-4">
      <div className="grid grid-cols-5 gap-2 text-center text-white text-md">
        {forecast.map((item) => (
          <div key={item.time}>
            <div>{item.time}</div>
            <div className="flex justify-center items-center">
              <Sun size={15} />
              <span>{item.temp}°</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-transparent text-white w-80">
    <h3 className="font-bold mb-2">Random Text</h3>
    <p className="text-sm">
      Improve him believe opinion offered met and end cheered forbade. Friendly as stronger speedily by recurred. Son interest wandered sir addition end say. Manners beloved affixed picture men ask.
    </p>
  </div>
    </div>
    
    )
}

export default HourlyForecast