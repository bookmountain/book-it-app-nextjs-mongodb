module.exports = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI:
      "mongodb+srv://sam:O8PU5KbOPrkHP7WP@cluster0.nskku.mongodb.net/bookit?retryWrites=true&w=majority",
    CLOUDINARY_CLOUD_NAME: "dxdi1outs",
    CLOUDINARY_API_KEY: "647112323217985",
    CLOUDINARY_API_SECRET: "okyPvgb9y_80D-amCYBnoDCx0J0",
    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "37c2e882649281",
    SMTP_PASSWORD: "7e00c5d94cd4b1",
    SMTP_FROM_NAME: "BookIT",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};
