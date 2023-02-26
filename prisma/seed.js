const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const words = [
        { word: 'Banana', hint: 'Yellow fruit' },
        { word: 'Elephant', hint: 'Big gray animal' },
        { word: 'Beach', hint: 'Sand and ocean' },
        { word: 'Rainbow', hint: 'Colors in the sky' },
        { word: 'Guitar', hint: 'Musical instrument' },
        { word: 'Laptop', hint: 'Portable computer' },
        { word: 'Pizza', hint: 'Cheesy triangle' },
        { word: 'Sunglasses', hint: 'Protective eyewear' },
        { word: 'Telescope', hint: 'Astronomy tool' },
        { word: 'Umbrella', hint: 'Rain protection' },
        { word: 'Waterfall', hint: 'Falling water' },
        { word: 'Zebra', hint: 'Black and white stripes' },
        { word: 'Butterfly', hint: 'Insect with wings' },
        { word: 'Dragon', hint: 'Mythical creature' },
        { word: 'Fireworks', hint: 'Explosive display' },
        { word: 'Hamburger', hint: 'Burger with toppings' },
        { word: 'Ice Cream', hint: 'Frozen dessert' },
        { word: 'Jellyfish', hint: 'Tentacled sea creature' },
        { word: 'Kangaroo', hint: 'Australian marsupial' },
        { word: 'Lion', hint: 'King of the jungle' },
        { word: 'Moon', hint: 'Earth\'s natural satellite' },
        { word: 'Ninja', hint: 'Stealthy warrior' },
        { word: 'Octopus', hint: 'Eight-armed sea creature' },
        { word: 'Penguin', hint: 'Black and white bird' },
        { word: 'Raincoat', hint: 'Waterproof garment' },
        { word: 'Starfish', hint: 'Spiny sea creature' },
        { word: 'Tiger', hint: 'Orange and black stripes' },
        { word: 'Unicorn', hint: 'Mythical horse with horn' },
        { word: 'Volcano', hint: 'Erupting mountain' },
        { word: 'Waffle', hint: 'Grid-patterned breakfast' },
      ]
    
      for (const word of words) {
        await prisma.words.create({
          data: {
            word: word.word,
            hint: word.hint,
          },
        })
      }
    }
    
    main()
      .catch((e) => console.error(e))
      .finally(async () => {
        await prisma.$disconnect()
      })