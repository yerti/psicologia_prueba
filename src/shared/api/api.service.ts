import { NetworkException } from "../constants/error";
import Cookies from 'js-cookie';

interface Request {
  path?: string;
  params?: { [key: string]: any };
}

export class APIService {
  constructor(private readonly endpoint: string) {}

  protected async post<T>(request: Request): Promise<T> {
    return this.fetch({ ...request, method: "POST" }) as T;
  }

  protected async put<T>(request: Request): Promise<T> {
    return this.fetch({ ...request, method: "PUT" }) as T;
  }

  protected async patch<T>(request: Request): Promise<T> {
    return this.fetch({ ...request, method: "PATCH" }) as T;
  }

  protected async get<T>(request: Request): Promise<T> {
    return this.fetch({ ...request, method: "GET" }) as T;
  }

  protected async delete<T>(request: Request): Promise<T> {
    return this.fetch({ ...request, method: "DELETE" }) as T;
  }

  private async fetch(request: Request & { method: string }) {
    const { path, method, params } = request;
    let url = `https://0572-181-66-138-9.ngrok-free.app${this.endpoint}${
      path ?? ""
    }`;

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "X-Application": "Backoffice",
      },
    };

    const authToken = Cookies.get("authToken");

    if (authToken) {
      options.headers = {
        ...options.headers,
        ["Authorization"]: `Bearer ${authToken}`,
      };
    }

    if (["POST", "PATCH", "PUT"].includes(method)) {
      options.body = JSON.stringify(params ?? {});
    }

    if (["GET", "DELETE"].includes(method)) {
      const urlParams = new URLSearchParams(params ?? {});
      url += "?" + urlParams.toString();
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw NetworkException;
    }

    if (response.headers.get("content-length") === "0") {
      return null; // or return an empty object {}, depending on your needs
    }

    const data = await response.json();
    return data;
  }
}
