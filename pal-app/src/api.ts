import { Board } from "./types";
import { Definition } from "./types";

export const getAllBoard = async (): Promise<Board[]> => {
    const res = await fetch('http://localhost:3001/board', {
        cache: "no-store",
    });
    const boards = res.json();

    return boards;
};

export const getDefinition = async (): Promise<Definition> => {
    const res = await fetch('http://localhost:3001/definition', {
        cache: "no-store",
    });
    const definition = res.json();
    return definition;
};

export const addBoard = async (board: Board): Promise<Board> => {
    const res = await fetch('http://localhost:3001/board', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(board),
    });
    console.log(board);
    const newboards = res.json();

    return newboards;
};