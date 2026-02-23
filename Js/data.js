// Scientific History Data
const scienceHistory = [
    {
        id: 1,
        year: "212 BC",
        title: "Archimedes' Eureka Moment",
        story: "King Hiero's crown - was it pure gold? Archimedes steps into a bath, watches water rise, and suddenly understands: he can measure volume by water displacement! He runs naked through the streets screaming 'Eureka!'",
        mindBlown: "The same principle is still used today to test if gold is pure!",
        image: "📐"
    },
    {
        id: 2,
        year: "1609",
        title: "Galileo's Telescope",
        story: "Everyone said: 'The heavens are perfect and unchanging.' Galileo sees: mountains on the moon, moons orbiting Jupiter, spots on the sun. He proved Earth wasn't the center of everything.",
        mindBlown: "The Church apologized in 1992. Only 350 years later!",
        image: "🔭"
    },
    {
        id: 3,
        year: "1665",
        title: "Newton's Miracle Year",
        story: "Cambridge closed due to plague. 23-year-old Newton goes home for 18 months. In lockdown: invents calculus, discovers gravity, experiments with light, lays foundation for modern physics.",
        mindBlown: "One guy, one pandemic, changed EVERYTHING!",
        image: "🍎"
    },
    {
        id: 4,
        year: "1905",
        title: "Einstein's Miracle Year",
        story: "26-year-old patent clerk publishes 4 papers in ONE year. Each one Nobel-worthy: Photoelectric effect, Brownian motion, Special relativity, E=mc².",
        mindBlown: "Time slows down when you move faster. GPS satellites must adjust for this!",
        image: "⚡"
    },
    {
        id: 5,
        year: "1928",
        title: "Fleming's Accidental Discovery",
        story: "Alexander Fleming goes on vacation, leaves petri dishes dirty. Comes back - mold is killing bacteria. Penicillin discovered - first antibiotic.",
        mindBlown: "Before this, a scratch could kill you. Human lifespan increased 23 years!",
        image: "🧫"
    },
    {
        id: 6,
        year: "1953",
        title: "The Secret of Life",
        story: "Rosalind Franklin takes Photo 51 - an X-ray image of DNA. Watson sees it and instantly knows: double helix!",
        mindBlown: "Your DNA would stretch to Pluto and back - 20 times!",
        image: "🧬"
    }
];

// Inventions Data
const inventions = [
    {
        id: 1,
        year: "3500 BC",
        title: "The Wheel",
        story: "Someone in Mesopotamia thought: 'What if we cut a circle and put it on a stick?'",
        impact: "Before wheels: Move everything by dragging. After wheels: Civilization explodes.",
        mindBlown: "The wheel was ONLY invented ONCE in human history. Every wheel everywhere descended from this idea.",
        image: "🛞"
    },
    {
        id: 2,
        year: "1440",
        title: "Printing Press",
        story: "Gutenberg's printing press - mass production of books.",
        impact: "Ideas spread like wildfire. The Reformation, Science, Democracy follow.",
        mindBlown: "First book printed? The Bible. Within 50 years, 20 million books printed.",
        image: "📚"
    },
    {
        id: 3,
        year: "1712",
        title: "Steam Engine",
        story: "Newcomen and Watt figure out how to turn fire into motion.",
        impact: "Trains, ships, factories. We can go anywhere, make anything.",
        mindBlown: "The Industrial Revolution happens in 100 years. More change than previous 1000 years combined.",
        image: "🚂"
    },
    {
        id: 4,
        year: "1882",
        title: "Electricity Grid",
        story: "Edison's first power plant lights 85 buildings in NYC.",
        impact: "Work, play, live 24/7. Cities never sleep.",
        mindBlown: "Today NYC uses 11,000 megawatts - enough to light 110 million buildings!",
        image: "⚡"
    },
    {
        id: 5,
        year: "1947",
        title: "Transistor",
        story: "Bell Labs invents a tiny switch that controls electricity with no moving parts.",
        impact: "Without this: No computers, no phones, no internet.",
        mindBlown: "First transistor was 1cm. Now 10 million fit on a pinhead.",
        image: "💻"
    },
    {
        id: 6,
        year: "1969",
        title: "Internet",
        story: "First message sent between two computers: 'LO' - system crashed before 'LOGIN'",
        impact: "Today: 5 billion people connected. All human knowledge in your pocket.",
        mindBlown: "More information crosses the internet every second than existed in all libraries in 1980.",
        image: "🌐"
    }
];

// Brain Trigger Questions
const brainTriggers = [
    {
        id: 1,
        question: "If the universe is expanding, what is it expanding INTO?",
        answer: "Nothing - space itself is expanding. There's no 'outside'. The universe IS everything.",
        hint: "Think of raisins in a rising cake..."
    },
    {
        id: 2,
        question: "How many possible connections in your brain?",
        answer: "More than atoms in the universe. Each of 86 billion neurons connects to 10,000 others. Possible brain states: 10^1,000,000 - a 1 with a million zeros!",
        hint: "It's the most complex structure in the known universe"
    },
    {
        id: 3,
        question: "If Earth's history was 24 hours, when do humans appear?",
        answer: "At 11:59:57 PM. The last 3 seconds. All recorded history? The last 0.1 seconds.",
        hint: "We're very new here..."
    },
    {
        id: 4,
        question: "Are you made of stardust?",
        answer: "Literally yes. Every atom of carbon, oxygen, iron in your body was fused inside a star that exploded. You are the universe experiencing itself.",
        hint: "We are star stuff harvesting sunlight"
    },
    {
        id: 5,
        question: "Why can't we walk through walls if atoms are 99.99% empty space?",
        answer: "Electrons repel each other with incredible force. The 'empty space' is filled with electromagnetic fields. You're not touching anything - ever. Just feeling repulsion.",
        hint: "It's all about electromagnetic force"
    },
    {
        id: 6,
        question: "How many galaxies can we see?",
        answer: "About 2 trillion. Each with 100 million to 100 billion stars. More stars than grains of sand on all Earth's beaches.",
        hint: "Look up on a clear night..."
    }
];

// Daily triggers array
const dailyTriggers = [
    "If you could travel at light speed and turn on a flashlight, what happens?",
    "Is your brain reading this, or is 'you' something the brain creates?",
    "If the universe began 13.8 billion years ago, what was 'before' that?",
    "Are there colors we can't see? Mantis shrimp see 12 primary colors, we see 3.",
    "If you're made of atoms that were once in stars, are you the star experiencing itself?",
    "Does time exist, or is it just how we measure change?",
    "Why is there something rather than nothing?",
    "Is mathematics invented or discovered?",
    "Do we have free will, or is everything determined by physics?",
    "If the universe is expanding, what is it expanding into?"
];
