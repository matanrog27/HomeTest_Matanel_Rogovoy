export type WatchedMovie = {
    id: number;
    title: string | undefined;
    date: number;
}

export type LikedMovie = {
    id: number;
    title: string | undefined;
}

export type MovieContextType = {
    watched: WatchedMovie[];
    Liked: LikedMovie[];
    AddWatched: (movie: WatchedMovie) => void;
    AddLiked: (movie: LikedMovie) => void;
    RemoveLiked: (id: number) => void;

}
