const iterateWithAsyncAwait = async (values) => {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
  }
};
const awaitCall = async () => {
  const apiCall = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched from API");
      }, 2000); // Simulate API response delay
    });
  };
  const data = await apiCall();
  console.log(data);
};
const awaitCall1 = async () => {
  const apiCall = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating a failure
        const shouldFail = Math.random() > 0.5;
        if (shouldFail) {
          reject("API call failed");
        } else {
          resolve("Data fetched from API");
        }
      }, 2000);
    });
  };

  try {
    const data = await apiCall();
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
const concurrentRequests = async () => {
  const apiCall1 = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Response from API call 1");
      }, 2000);
    });
  };

  const apiCall2 = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Response from API call 2");
      }, 3000);
    });
  };

  const [response1, response2] = await Promise.all([apiCall1(), apiCall2()]);
  console.log(`Results: ${response1}, ${response2}`);
};
const parallelCalls = async (urls) => {
  const fetchData = async (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data from ${url}`);
      }, 1000); // Simulating data fetch delay
    });
  };

  const promises = urls.map((url) => fetchData(url));
  const responses = await Promise.all(promises);
  console.log(responses);
};
