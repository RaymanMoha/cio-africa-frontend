import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

type ApiErrorResponse = {
  data?: {
    msg?: string;
  };
  msg?: string;
};

export const baseRequestHandler = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  return config;
};

export const handleRequestError = (err: AxiosError): Promise<never> => {
  const errorDetails: any = err.response
    ? JSON.parse(JSON.stringify(err.response))
    : JSON.parse(JSON.stringify(err));

  return Promise.reject({
    statusCode: errorDetails?.response?.status,
    errorMsg: errorDetails?.data?.error?.message as any,
  });
};

const apiRequest = axios.create({});

apiRequest.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return baseRequestHandler(config);
  },
  (error: ApiErrorResponse) => {
    return Promise.reject(error);
  },
);

apiRequest.interceptors.response.use(
  (response: AxiosResponse) => response,
  (err: AxiosError) => handleRequestError(err),
);

export default apiRequest;
