const rawData = [
  {
    name: "Leicester City",
    points: 32,
    GD: 10,
  },
  {
    name: "Liverpool",
    points: 33,
    GD: 17,
  },
  {
    name: "Manchester City",
    points: 29,
    GD: 11,
  },
  {
    name: "Manchester United",
    points: 33,
    GD: 9,
  },
  {
    name: "Tottenham",
    points: 29,
    GD: 14,
  },
]

const sortTeams = (teams) =>
  teams.sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points
    if (a.GD !== b.GD) return b.GD - a.GD
    return a - b
  })

console.log(sortTeams(rawData))
