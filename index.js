function configureCors(options = {}) {
  const {
    origins = ["*"],
    methods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    headers = [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    allowCredentials = false,
  } = options;

  return (req, res, next) => {
    if (origins.includes("*")) {
      res.header("Access-Control-Allow-Origin", "*");
    } else {
      const origin = req.headers.origin;
      if (origins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
      }
    }

    res.header("Access-Control-Allow-Methods", methods.join(", "));
    res.header("Access-Control-Allow-Headers", headers.join(", "));

    if (allowCredentials) {
      res.header("Access-Control-Allow-Credentials", "true");
    }

    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }

    next();
  };
}

module.exports = configureCors;
