import http from "k6/http";
import { sleep } from "k6";
import config from "./config.js";

export const options = {
  vus: config.VU,
  duration: `${config.duration}s`,
};

export default function () {
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.OAUTH_TOKEN}`,
    },
  };

  const body = JSON.stringify(config.guitar);

  http.post("http://localhost:3001/guitars", body, params);
}
