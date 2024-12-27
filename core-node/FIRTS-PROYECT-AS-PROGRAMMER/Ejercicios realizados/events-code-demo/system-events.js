const https = require("https");

const req = https.get(
  "https://en.wikipedia.org/w/api.php?action=help&format=json",
  (res) => {
    res.on("data", (data) => {
      console.log("... recibiendo datos");
    });

    res.on("end", (data) => {
      console.log(data);
    });
  }
);

req.on("abort", (data) => {
  console.log("abort");
});

req.on("close", (data) => {
  console.log("close");
});

req.on("connect", (data) => {
  console.log("connect");
});

req.on("continue", (data) => {
  console.log("continue");
});

req.on("drain", (data) => {
  console.log("drain");
});

req.on("error", (error) => {
  console.log("error");
});

req.on("finish", (data) => {
  console.log("finish");
});

req.on("information", (data) => {
  console.log("information");
});

req.on("pipe", (data) => {
  console.log("pipe");
});

req.on("response", (data) => {
  console.log("response");
});

req.on("socket", (data) => {
  console.log("socket");
});

req.on("timeout", (data) => {
  console.log("timeout");
});

req.on("unpipe", (data) => {
  console.log("unpipe");
});

req.on("upgrade", (data) => {
  console.log("upgrade");
});
