module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    DB_URI:
      "mongodb+srv://sam:O8PU5KbOPrkHP7WP@cluster0.nskku.mongodb.net/bookit?retryWrites=true&w=majority",

    STRIPE_API_KEY:
      "pk_test_51JzLB9INldQ30ZjeQP5QirK9b1KtyJTBYp3N5D9HHsBfxJSpf6WODCXRwKggBgtSnUiaQCz1WZ2F1jOmoW4mHhq900Hcy2iCVg",
    STRIPE_SECRETE_KEY:
      "sk_test_51JzLB9INldQ30ZjenQOhzQT9XRJZEVH2cSyMhMtOHjYZVR87g1nYXXsSQrx5w064wzwhTNlsWe5bmGQkCrnKCHQV001fSMMKr3",
    STRIPE_WEBHOOK_SECRET: "whsec_ZLqlnI2pOuA7KfuK0to7lZnr8PlxLjck",

    CLOUDINARY_CLOUD_NAME: "dxdi1outs",
    CLOUDINARY_API_KEY: "647112323217985",
    CLOUDINARY_API_SECRET: "okyPvgb9y_80D-amCYBnoDCx0J0",
    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "37c2e882649281",
    SMTP_PASSWORD: "7e00c5d94cd4b1",
    SMTP_FROM_NAME: "BookIT",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    NEXTAUTH_URL: "https://bookit.bookmountain.vercel.app",,
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};
