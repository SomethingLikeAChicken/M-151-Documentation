const { PrismaClient } = require("@prisma/client");

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const words = await prisma.words.findMany();
  res.status(200).json(words);

}
