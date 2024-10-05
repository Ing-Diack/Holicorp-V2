export const hostUrl = "http://localhost:3001";

export const PostRequest = async (hostUrl, body) => {
  const response = await fetch(hostUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, status: response.status, message };
  }
  return data;
};

export const getRequest = async (hostUrl) => {
  const response = await fetch(hostUrl);
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, status: response.status, message };
  }
  return data;
};

export const DeleteRequest = async (hostUrl) => {
  const response = await fetch(hostUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, status: response.status, message };
  }
  return data;
};
export const UpdateRequest = async (hostUrl, body) => {
  const response = await fetch(hostUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, status: response.status, message };
  }
  return data;
};
