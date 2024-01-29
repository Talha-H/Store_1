const fetchData = async () => {
  try {
    const response = await fetch(process.env.API_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return null;
  }
};

export { fetchData };
