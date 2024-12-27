import Replicate from "replicate";
import { spawn } from "child_process";

process.env.REPLICATE_API_TOKEN = "";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// IMAGE

/* 
const model =
  "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
const input = {
  prompt:
    "an black man riding a white horse on mars, hd, dramatic lighting, detailed",
  //"a group of people learning javascript, hd, dramatic lighting, detailed, unreal engine",
};
const output = await replicate.run(model, { input });
const openImage = spawn("open", [output[0]]);
openImage.on("close", (code) => {
  console.log(`Navegador abierto con imagen: ${output[0]}`);
}); */

// TEST
/* 
const prompt =
  "Could you explain me how to use streams in nodejs, im learning javascript and i want to use them in my application";

const prediction = await replicate.predictions.create({
  version: "2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
  input: {
    prompt,
  },
  stream: true,
});

console.log(prediction.urls.stream);

// lets create a server with a client code that will be executed in the browser
import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
                <html>
                <head>
                        <title>Oraculo del Alba</title>
                </head>
                <body>
                        <h1>Oraculo del Alba</h1>
                        <h2>Pregunta recibida: ${prompt}</h2>
                        <h3><p></p><h3>
                        
                </body>
                <script>
                        const paragraph = document.querySelector("p");
                        const source = new EventSource("${prediction.urls.stream}", {
                        withCredentials: true,
                        });
        
                        source.addEventListener("output", (e) => {
                        paragraph.textContent = paragraph.textContent + " " + e.data;
                        console.log("output", e.data);
                        });
        
                        source.addEventListener("error", (e) => {
                        console.error("error", JSON.parse(e.data));
                        });
        
                        source.addEventListener("done", (e) => {
                        source.close();
                        console.log("done", JSON.parse(e.data));
                        });
                        </script>
                </html>
                `);
  res.end();
});

server.listen(8071, () => console.log("Server listening on port 8007"));

const openUrl = spawn("open", ["http://localhost:8071"]);
 */
