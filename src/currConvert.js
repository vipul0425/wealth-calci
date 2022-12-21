const currConvert = async (curr) => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "19c5fd2358mshf9cd0fd8f3a3df6p1c3ec7jsnf0e34b684baf",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      };
      const res = await fetch(
        `https://currency-exchange.p.rapidapi.com/exchange?from=usd&to=${curr}&q=1`,
        options
      );
      const data = await res.json();
      console.log("function:",data)
      return data;   
  };

  export default currConvert;