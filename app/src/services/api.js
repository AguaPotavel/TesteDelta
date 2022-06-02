import axios from "axios";
import config from "../config";
const baseUrl = `http://${config.BASE_URL}/api/v1/`;

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

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Internal Server Error",
    }
  }
};

export const updateStudent = async (data) => {
  try {
    const response = await api.post(`student/update`, data);

    return {
      data: response.data,
      status: response.status,
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const createStudent = async (data) => {
  try {
    const response = await api.post("student/create", data);

    return {
      status: response.status,
      data: response.data,
    };

  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await api.delete(`student/${id}`);

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
}

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
    return {
      status: 500,
    };
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

    return {
      status: response.status
    };

  } catch (error) {
    console.log(error.response);
    return {
      status: 500,
    };
  }
};
