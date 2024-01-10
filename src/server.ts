import fastify from "fastify";
import { prisma } from "./lib/prisma";
const app = fastify();

app.get("/oi", async () => {
  const jogos = await prisma.game.findMany();
  return jogos;
});
app.listen({ port: 3333 }).then(() => console.log("Servidor rodando"));
