import fastify from "fastify";
import { prisma } from "./lib/prisma";
const app = fastify();
import cors from "@fastify/cors";
import "dotenv/config";
app.register(cors, {
  origin: "*",
  methods: ["POST", "GET", "PUT"],
});

app.get("/oi", async () => {
  const jogos = await prisma.game.findMany();
  return jogos;
});
app
  .listen({ port: Number(process.env.PORT) })
  .then(() => console.log("Servidor rodando"));
