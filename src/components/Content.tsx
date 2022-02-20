import { MovieCard } from "./MovieCard";

interface ContentProps {
  titleSelected: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({ titleSelected }: ContentProps, filmes: MovieProps[]) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {titleSelected}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {filmes.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
