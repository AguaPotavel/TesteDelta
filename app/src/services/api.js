import axios from "axios";
const baseUrl = "http://192.168.100.7:3000/api/v1/";

const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export const getStudents = async () => {
  try {
    const response = await api.get("students", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    if (response.status === 404) {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = async (data) => {
  try {
    const response = await api.post(`student/update/`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...data },
    });

    if (response.status === 200) {
      return response.data;
    }

    if (response.status === 404) {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const createStudent = async (data) => {
  try {
    const response = await api.post("student/create", data);

    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getStudentPhoto = async (id) => {
  try {
    const response = await api.get(`student/${id}/photo`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const uploadPhoto = async (id, image) => {
  console.log("try upload photo");

  console.log("image", image);
  console.log("id:", id);

  const formData = new FormData();
  formData.append("image", {
    uri: image.uri,
    type: "image/jpeg",
    name: new Date().getTime() + "",
  });

  try {
    const response = await api.post(`${id}/upload/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response);
    return {};
  }
};
