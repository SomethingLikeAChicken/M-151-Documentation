const { PrismaClient } = require("@prisma/client");

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const { name, money, roundsPlayed } = req.body.scores;
    const newScore = await prisma.score.create({
      data: {
        name,
        money,
        roundsPlayed,
      },
    });
    res.status(201).json(newScore);
  } else if (req.method === "GET") {
    const scores = await prisma.score.findMany({
      orderBy: {
        money: 'desc'
      },
    });
    res.status(200).json(scores);
  }
}