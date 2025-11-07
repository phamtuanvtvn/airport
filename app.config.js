// filepath: c:\Users\w104027\Dev\Airport\app.config.js
export default {
  expo: {
    name: "Airport Terminal App",
    slug: "airport-terminal",
    version: "1.0.0",
    orientation: "portrait",
    platforms: ["ios", "android", "web"],
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#1e40af"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "dev.airport.terminal"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/app-icon.png",
        backgroundColor: "#1e40af"
      },
      package: "dev.airport.terminal"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "your-project-id-here"
      }
    }
  }
};