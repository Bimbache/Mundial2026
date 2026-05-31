exports.handler = async function(event) {
  const path = event.queryStringParameters?.path || "/status";
  const key  = event.queryStringParameters?.key  || "";
  try {
    const res = await fetch("https://v3.football.api-sports.io" + path, {
      headers: {
        "x-rapidapi-key":  key,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    });
    const data = await res.json();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
