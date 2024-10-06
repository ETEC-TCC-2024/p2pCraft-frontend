import { API_URL } from "@/app/actions/config";

class P2PApi {
  async post(path: string, body: Object) {
    return fetch(API_URL + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async get(path: string) {
    return fetch(API_URL + path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async put(path: string, body: Object) {
    return fetch(API_URL + path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async delete(path: string, body: Object) {
    return fetch(API_URL + path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
  async fetcher(path: string, init: RequestInit) {
    init.headers = { "Content-Type": "application/json" };

    return fetch(API_URL + path, init);
  }
}
export default new P2PApi();
