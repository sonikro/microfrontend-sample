import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sonikro/microfrontend-appbar",
  app: () =>
    System.import(
      "http://localhost:8080/sonikro-microfrontend-appbar.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sonikro/microfrontend-home",
  app: () =>
    System.import(
      "http://localhost:8085/sonikro-microfrontend-home.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
