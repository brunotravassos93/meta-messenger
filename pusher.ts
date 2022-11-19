import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1509363",
  key: "85fd1332816324a2b5bb",
  secret: "8a4f1b92436f903f2f59",
  cluster: "us2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("85fd1332816324a2b5bb", {
  cluster: "us2",
  forceTLS: true,
});
