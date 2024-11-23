import React from "react";
import hot from "../../assets/hot.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import PopularCities from "./PopularCities.jsx";

function InfoBox({ info }) {
  // "https://images.unsplash.com/18/misty-plank.JPG?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1550077404-c00d89693129?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://media.istockphoto.com/id/1201968313/photo/man-walking-along-an-unpaved-village-road-at-sunset.jpg?s=612x612&w=0&k=20&c=QDPEQ8h75s1Pd0-GQnGdqw6i9-uA5TLFiczf_bhGdJU=";
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-14">
      <div className="w-11/12 shadow-lg transition hover:shadow-xl h-full rounded-2xl flex items-center justify-around p-6">
        <div className="container overflow-hidden mx-auto px-4 h-64 w-2/5">
          <img
            src={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 16
                ? HOT_URL
                : COLD_URL
            }
            className="h-full w-full object-cover object-center rounded-lg"
            alt=""
          />
        </div>
        <div className="w-2/3 mx-auto">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg p-6 ">
              <h2 className="text-2xl font-bold mb-4">Current Weather</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold" id="temperature">
                    {info.temp}°C
                  </p>
                  <div
                    className="state-name text-xl text-gray-500 flex gap-2 py-2"
                    id="location"
                  >
                    {info.cityName}
                    <div
                      style={{
                        height: "30px",
                        width: "40px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          info.humidity > 80
                            ? rain
                            : info.temp > 16
                            ? hot
                            : snow
                        }
                      />
                    </div>
                  </div>{" "}
                  <p className="text-gray-600" id="weather-description">
                    {info.weather}
                  </p>
                </div>
                <div className="text-6xl text-gray-600">
                  <i id="weather-icon" className="fas fa-cloud"></i>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Feels-Like: {info.feelsLike}°C
                  </p>
                  <p className="text-sm text-gray-600">
                    Max-Temp: {info.tempMax}°C
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Humidity: {info.humidity}%
                  </p>
                  <p className="text-sm text-gray-600">
                    Min-Temp: {info.tempMin}°C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularCities />
    </div>
  );
}

export default InfoBox;
