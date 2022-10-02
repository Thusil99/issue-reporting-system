import { http } from "../http";

const SERVICE_URL = "/";

export const getAllIssues = async () => {
  return await http.get(SERVICE_URL);
};

export const addIssue = async (data) => {
  return await http.post(SERVICE_URL, { ...data });
};

export const updateState = async (id, newState) => {
  return await http.post(`${SERVICE_URL}updateState/${id}`, { newState });
};

export const deleteIssue = async (id) => {
  return await http.delete(`${SERVICE_URL}/${id}`);
};
