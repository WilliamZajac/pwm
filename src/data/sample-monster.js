export default {
  name: "teehee",
  stats: {
    strength: 10,
    defense: 10,
    speed: 10,
    magic: 10
  },
  type: "Normal",
  moves: [
    {
      name: "Suicidal Slash",
      multipliers: [1.1, 1.5],
      speedModifiers: [1, .8],
      effects: {
        self: {
          defense: .75
        },
        target: {
          defense: 1
        }
      }
    }
  ]
}
