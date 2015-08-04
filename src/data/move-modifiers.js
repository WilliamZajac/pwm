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
  }, {
	name: "Blast",
	type: "suffix",
	multiplier: 1.3,
	speed: .6,
  }, {
	name: "Body Slam",
	type: "suffix",
	multiplier: 2,
	speed: .3,
	self: {
		defense: .7,
		health: .85
	}
  }, {
	name: "Karate Chop",
	type: "suffix",
	multiplier: .9,
	speed: 1.15,
	target: {
		defense: .9
	}
  }, {
	name: "Slap",
	type: "suffix",
	multiplier: 1,
	speed: .9,
	self: {
		health: .9
	}
  }, {
	name: "Lick",
	type: "suffix",
	multiplier: .3,
	speed: 1,
	target: {
		defense: .4
	}  
  }, {
	name: "Shot",
	type: "suffix",
	multiplier: 1.3,
	speed: 1.1,
	target: {
		defense: .8
	}  
  }, {
	name: "Mind Blast",
	type: "suffix",
	multiplier: 2,
	speed: .5,
	self: {
		defense: .4
	}
  }, {
	name: "Beam",
	type: "suffix",
	multiplier: 1.5,
	speed: .75,
	target: {
		defense: .8
	}
  }, {
	name: "whirlwind",
	type: "suffix",
	multiplier: .45,
	speed: 2,
	target: {
		defense: .8
	}
  }, {
    name: "Holy",
    type: "prefix",
    multiplier: .8,
    speed: .8,
    self: {
      defense: 1.5
    }
  }, {
    name: "Nimble",
    type: "prefix",
    multiplier: .9,
    speed: 1.3,
    target: {
      defense: .8
    }
  }, {
    name: "Almighty",
    type: "prefix",
    multiplier: 1.5,
    speed: 1,
    self: {
      defense: 1.25
    }
  }, {
    name: "Foiling",
    type: "prefix",
    multiplier: 1,
    speed: 1,
    self: {
      defense: 2
    }
  }, {
    name: "Explosive",
    type: "prefix",
    multiplier: 1.75,
    speed: 1,
    self: {
      health: .75
    }
 ]
