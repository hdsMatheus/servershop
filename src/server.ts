import fastify from "fastify";
import { prisma } from "./lib/prisma";
const app = fastify();
import cors from "@fastify/cors";

app.register(cors, {
  origin: "*",
  methods: ["POST", "GET", "PUT"],
});

app.get("/oi", async () => {
  const jogos = await prisma.game.findMany();
  return jogos;
});
app.listen({ port: 3333 }).then(() => console.log("Servidor rodando"));
