import http from "k6/http";
import { sleep } from "k6";
export const options = {
  vus: 10,
  duration: "30s",
};
export default function () {
  const params = {
    headers: {
      // "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjYTR0d0hwWE1lLXdBdzVSb0FyWWJaUzMwS1o0R0p6bXhWaFQ4azhIY0I0In0.eyJleHAiOjE2NTUyMjI2ODgsImlhdCI6MTY1NTIyMjYyOCwianRpIjoiNDIxNGU1M2MtMGZkMi00OGYxLWE1N2ItMDI2OWI5ZjVlN2VmIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJhOWIyY2UzOS1jNGZmLTQyY2MtOTNmZC0wN2ZhMTc2NjY0NzMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJteWFwcCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE3Mi4xOC4wLjEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImNsaWVudElkIjoibXlhcHAiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbXlhcHAiLCJjbGllbnRBZGRyZXNzIjoiMTcyLjE4LjAuMSJ9.JOa4XGNfWHFmtfBG9TKOIH-CjZSfNSHiHoBfQpmryB_t7TF2f4D7Eo8jzaKnEmex8wIc7vGCI1g9tPuQMdHpQ9jBTeNnthWox-Qta5sLb76hba1jXnAePUy-5qZS4Ta-ok66PS9OWEFVP4Iu4cmVAI1pDtZBcE0qPzPXUzkbffSnhx-C5cE5hbNQdLbjg6bOfYIdJZbdWE9H8tz1Osv36tsvbk17ueH8pfkzV9_ZQW-WboXJblC81cipPJHz0ucE1ggNHzKr0Lu62Ed1-qhSUDgGB3VGcW7PZshkhGFRxgz3dd4TrdZVCQ-dKrAKSocKRRtPXPjXmt-4XUeof97i1g",
    },
  };

  http.get("http://localhost:3000/guitars", params);
  sleep(1);
}
