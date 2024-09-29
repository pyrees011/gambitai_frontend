import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRightIcon, SunIcon, ClockIcon } from "lucide-react"

const gameResults = [
  {
    players: [
      { name: "pyrees", rating: 233, country: "fr" },
      { name: "Eliaslek", rating: 537, country: "fr" },
    ],
    result: [0, 1],
    accuracy: "Review",
    moves: 7,
    date: "Sep 11, 2024",
  },
  {
    players: [
      { name: "pyrees", rating: 957, country: "fr" },
      { name: "moss0615", rating: 929, country: "fr", icon: "👓" },
    ],
    result: [1, 0],
    accuracy: "Review",
    moves: 18,
    date: "Sep 10, 2024",
  },
  {
    players: [
      { name: "pyrees", rating: 949, country: "fr" },
      { name: "grid-reeves", rating: 952, country: "se", icon: "⭐" },
    ],
    result: [0, 1],
    accuracy: "Review",
    moves: 33,
    date: "Sep 10, 2024",
  },
  {
    players: [
      { name: "pyrees", rating: 957, country: "fr" },
      { name: "sitarul", rating: 920, country: "ro" },
    ],
    result: [1, 0],
    accuracy: "Review",
    moves: 52,
    date: "Sep 9, 2024",
  },
  {
    players: [
      { name: "Floeqqu", rating: 944, country: "ch", icon: "👑" },
      { name: "pyrees", rating: 949, country: "fr" },
    ],
    result: [1, 0],
    accuracy: "Review",
    moves: 49,
    date: "Sep 2, 2024",
  },
]

export default function History() {
  return (
    <div className="w-full mx-auto bg-gray-200 text-gray-800 p-4 rounded-lg mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Completed Games</h2>
        <ChevronRightIcon className="h-6 w-6" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-zinc-400">Players</TableHead>
            <TableHead className="text-zinc-400">Result</TableHead>
            <TableHead className="text-zinc-400">Accuracy</TableHead>
            <TableHead className="text-zinc-400">Moves</TableHead>
            <TableHead className="text-zinc-400">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gameResults.map((game, index) => (
            <TableRow key={index} className="border-b border-zinc-800">
              <TableCell className="py-3">
                {game.players.map((player, playerIndex) => (
                  <div key={playerIndex} className="flex items-center space-x-2">
                    <span className={`w-4 h-4 inline-block ${playerIndex === 0 ? 'bg-white' : 'bg-black'} border border-zinc-600 rounded-sm`}></span>
                    <span className="font-semibold">{player.name}</span>
                    <span className="text-zinc-500">({player.rating})</span>
                    {player.icon && <span>{player.icon}</span>}
                  </div>
                ))}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <span>{game.result[0]}</span>
                  <span>{game.result[1]}</span>
                  <span className={`w-4 h-4 ${game.result[0] > game.result[1] ? 'bg-green-500' : 'bg-red-500'} rounded-sm`}></span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-blue-400">{game.accuracy}</span>
              </TableCell>
              <TableCell>{game.moves}</TableCell>
              <TableCell>{game.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}