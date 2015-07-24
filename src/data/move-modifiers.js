export default [
  {
    name: "Slash",
    type: "suffix",
    multiplier: 1.1,
    speed: 1,
    target: {
      defense: .8
    }
  }, {
    name: "Suicidal",
    type: "prefix",
    multiplier: 1.5,
    speed: .8,
    self: {
      defense: .75
    }
  }, {
    name: "Stomp",
    type: "suffix",
    multiplier: 1.8,
    speed: .5,
    self: {
      defense: .8
    }
  }
];
