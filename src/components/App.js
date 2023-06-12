import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];
function App() {
  const [isOpenStateIndex, setIsOpenStateIndex] = useState(-1);
  const [isOpenCityIndex, setIsOpenCityIndex] = useState(-1);

  const toggleStateList = (index) => {
    console.log("rst");
    setIsOpenStateIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const toggleCityList = (stateIndex, cityIndex) => {
    if (isOpenStateIndex === stateIndex) {
      setIsOpenCityIndex((prevIndex) =>
        prevIndex === cityIndex ? -1 : cityIndex
      );
    } else {
      setIsOpenStateIndex(stateIndex);
      setIsOpenCityIndex(cityIndex);
    }
  };

  return (
    <div id="main">
      <ul>
        {states.map((state, stateIndex) => (
          <li key={stateIndex} onClick={() => toggleStateList(stateIndex)}>
            {state.name}
            {isOpenStateIndex === stateIndex && (
              <ul>
                {state.cities.map((city, cityIndex) => (
                  <li
                    key={cityIndex}
                    onClick={() => toggleCityList(stateIndex, cityIndex)}
                  >
                    {city.name}
                    {isOpenCityIndex === cityIndex && (
                      <ul>
                        {city.towns.map((town, townIndex) => (
                          <li key={townIndex}>{town.name}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
