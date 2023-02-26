import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // GET /api/words - Get all words with hints
    const words = await prisma.words.findMany()
    res.status(200).json(words)
  } else if (req.method === 'POST') {
    // POST /api/words - Add a new word
    const { word, hint } = req.body
    const newWord = await prisma.words.create({
      data: {
        word,
        hint,
      },
    })
    res.status(201).json(newWord)
  } else if (req.method === 'PUT') {
    // PUT /api/words/:id - Update a word by ID
    const { ID } = req.query // changed 'id' to 'ID'
    const { word, hint } = req.body
    const updatedWord = await prisma.words.update({
      where: {
        id: parseInt(ID),
      },
      data: {
        word,
        hint,
      },
    })
    res.status(200).json(updatedWord)
  } else if (req.method === 'DELETE') {
    // DELETE /api/words/:id - Delete a word by ID
    const { ID } = req.query // changed 'id' to 'ID'
    const deletedWord = await prisma.words.delete({
      where: {
        id: parseInt(ID),
      },
    })
    res.status(200).json(deletedWord)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}