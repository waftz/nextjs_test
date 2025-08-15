import CityData from "../../interfaces/city";
import WeatherData from "../../interfaces/weather";
import cities from "../../lib/city.list.json";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

let Cities = cities as CityData[];

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { city_id } = context.query;
  console.log("CITY ID:", context.query.city_id);

  //Find the city why city id
  const city = Cities.find((city) => city.id.toString() == city_id);
  if (!city) {
    throw new Error("City not found");
  }

  let url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city.name}&aqi=no`;
  console.log("CITY NAME:", city.name);
  //Fetch the weather data
  const res = await fetch(url);

  const weatherData: WeatherData = await res.json();

  if (!weatherData) {
    throw new Error("Weather data not found");
  }

  return {
    props: {
      // city_id: city_id,
      city: city,
      weather: weatherData,
    },
  };
}

type Props = {
  city: CityData;
  weather: WeatherData;
};

export default function ({ city, weather }: Props) {
  const urlImage = `https:${weather.current.condition.icon}`;
  return (
    <>
      <Head>
        <title>WeatherWave</title>
      </Head>
      <main className="mt-5 mx-5">
        <h1 className="text-xl font-medium mb-4">WeatherWave</h1>
        <Link href="/">&larr; Home</Link>
        <div className="py-5">
          <div className="bg-blue-500 rounded-xl p-4">
            <div className="grid grid-cols-2">
              <div>
                <h2 className="text-2xl mb-4 text-white">
                  {city.name} ({city.country})
                </h2>
                <span className="font-medium text-lg text-white">
                  {weather.current.temp_c.toFixed(0)}&deg;C
                </span>
                &nbsp;
                <span className="font-medium text-lg text-white">
                  {weather.current.temp_f.toFixed(0)}&deg;F
                </span>
              </div>
              <div className="justify-self-end">
                <Image
                  src={urlImage}
                  width={50}
                  height={50}
                  alt="Weather Icon"
                />
                <div className="text-white text-sm">
                  {weather.current.condition.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
