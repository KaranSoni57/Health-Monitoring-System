let latestData: any = {};

export default defineEventHandler(async (event) => {

  if (event.method === "POST") {
    const body = await readBody(event);
    latestData = body;
    console.log("Received:", latestData);
    return { status: "ok" };
  }

  if (event.method === "GET") {
    return latestData;
  }
});