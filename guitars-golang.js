import http from "k6/http";
import { sleep } from "k6";
import dotenv from "dotenv";

dotenv.config();

export const options = {
  vus: process.env.VU,
  duration: `${process.env.duration}s`,
};
export default function () {
  const params = {
    headers: {
      Authorization: `Bearer ${process.env.OAUTH_TOKEN}`,
    },
  };

  http.get("http://localhost:3000/guitars", params);
  sleep(1);
}
