//actuall have a delay of 1.5 second
export const getAll = async () => {
  const response = await fetch(`http://localhost:3010/getAll`);
  const data = await response.json();
  return data;
};

export const getByPage = async (pageParam, perPage) => {
  const response = await fetch(
    `http://localhost:3010/getByPage?page=${pageParam}&perPage=${perPage}`
  );
  const data = await response.json();
  return data;
};

export const getById = async (id) => {
  const response = await fetch(`http://localhost:3010/getById?id=${id}`);
  const data = await response.json();
  return data;
};

export const getTotalCount = async () => {
  const response = await fetch("http://localhost:3010/getTotalCount");
  const data = await response.json();
  return data;
};

export const updateFruit = async ({ id, name, description }) => {
  const response = await fetch("http://localhost:3010/update", {
    method: "PUT",
    body: JSON.stringify({
      id,
      name,
      description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
};

export const createFruit = async (name) => {
  const response = await fetch("http://localhost:3010/create", {
    method: "POST",
    body: JSON.stringify({ name, description: "A new fruit" }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
};
