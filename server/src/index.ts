import { Elysia, t } from "elysia";

new Elysia()
  .get("/test", () => "Hello, World!")
  .ws("/room", {
    query: t.Object({ id: t.String() }),
    open(ws) {
      ws.send(`Welcome to room ${ws.data.query.id}`);
      ws.subscribe(`room:${ws.data.query.id}`);
    },
    message(ws, message) {
      console.log("data test", ws.data);
      ws.send(`You said: ${message}`);
      ws.publish(`room:${ws.data.query.id}`, message);
    },
    close(ws) {
      ws.unsubscribe(`room:${ws.data.query.id}`);
    },
  })
  .listen(3000);
