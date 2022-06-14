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
      Authorization: `Bearer ${config.OAUTH_TOKEN}`,
    },
  };

  http.get("http://localhost:3000/guitars", params);
  sleep(1);
}
