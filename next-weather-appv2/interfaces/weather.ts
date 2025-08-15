interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lon: number;
    lat: number;
    tz_id: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
        text: string;
        icon: string;
    };
    wind_mph: number;
    wind_kph: number;
  }
}

export default WeatherData;
