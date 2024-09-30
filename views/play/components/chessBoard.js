import React, { useState } from 'react';

// firebase
import { ref, push, set, onValue, off } from "firebase/database";
import { db } from '@/config/firebase_config';


// chess piece json
import chessPieces from '@/utils/pieces.json';

// utils
import { cn } from '@/lib/utils';

// toasts
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChessBoard({ board, chess, setBoard, gameID }) {
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const getMoves = async () => {
        const movesRef = ref(db, `games/${gameID}/moves`);
        const snapshot = await get(movesRef);
        const movesData = snapshot.val();
        if (movesData) {
          return movesData;
        } else {
          console.log('no moves yet');
          return;
        }
    }


    const saveMoveToFirebase = async (move) => {
        const movesRef = ref(db, `games/${gameID}/moves`);
        const newMoveRef = push(movesRef);
        await set(newMoveRef, move);
    };

    const handleSquareClick = async (square, squareRepresentation) => {
        if (square === null && !selectedFrom) {
            return;
        }
        if (!selectedFrom) {
            setSelectedFrom(squareRepresentation);
        } else {
            console.log({
                from: selectedFrom,
                to: squareRepresentation
            });
            setSelectedFrom(null);

            try {
                const move = chess.move({
                    from: selectedFrom,
                    to: squareRepresentation
                });
                
                if (move) {
                    setBoard(chess.board());
                    
                    // Save the move to Firebase
                    await saveMoveToFirebase({
                        from: selectedFrom,
                        to: squareRepresentation,
                        piece: move.piece,
                        color: move.color,
                        timestamp: Date.now()
                    });

                    if (chess.isCheckmate()) {
                        console.log('checkmate');
                        await setBoard(chess.board());
                        toast(`checkmate ${chess.turn() === 'w' ? 'black' : 'white'} wins`);
                        setGameOver(true);
                    }

                    if (chess.in_draw()) {
                        console.log('draw');
                        await setBoard(chess.board());
                        toast('draw');
                        setGameOver(true);
                    }

                    if (chess.in_stalemate()) {
                        console.log('stalemate');
                        await setBoard(chess.board());
                        toast('stalemate');
                        setGameOver(true);
                    }
                    
                }
            } catch (error) {
                console.error(error);
                setSelectedFrom(null);
            }
        }
    };

    return (
        <div className={cn({ 'cursor-not-allowed': gameOver, "z-10": gameOver})}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className='flex'>
                    {row.map((square, squareIndex) => {
                        const squareRepresentation = String.fromCharCode(97 + (squareIndex % 8)) + "" + (8 - rowIndex);
                        return (
                            <div
                                onClick={() => handleSquareClick(square, squareRepresentation)}
                                key={squareIndex}
                                className={cn(`h-24 w-24 flex items-center justify-center ${
                                    (rowIndex + squareIndex) % 2 === 0 ? 'bg-gray-300' : 'bg-gray-500'
                                }`, { 'bg-slate-700': selectedFrom === squareRepresentation, 
                                'opacity-70': gameOver })}
                            >
                                {square ? <img src={chessPieces[`${square.color + square.type}`]} alt='piece' className='w-12 h-12'/> : ""}
                            </div>
                        );
                    })}
                </div>
            ))}
            <ToastContainer />
        </div>
    );
}