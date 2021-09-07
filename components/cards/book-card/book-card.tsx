import Image from "next/image";
import Link from "next/link";
import useBookCardStyles from "./styles";
import { format } from "date-fns";

export type BookCardProps = {
  id: string;
  title: string;
  cover: string;
  datePublished: string;
  isbn: number;
  author: {
    id: string;
    name: string;
  };
};

const BookCard = ({
  id,
  title,
  cover,
  datePublished,
  isbn,
  author,
}: BookCardProps) => {
  const classes = useBookCardStyles();
  return (
    <div className={classes.Card}>
      <div className={classes.imageBox}>
        <Image
          src={cover}
          alt={title}
          width={136}
          height={212}
          layout="responsive"
        />
      </div>
      <div className={classes.textBox}>
        <header>
          <h3>{title}</h3>
          <h5>
            <Link href={`/authors/${author.id}`}>
              <a>{author.name}</a>
            </Link>
          </h5>
        </header>
        <footer>
          <div>
            <time>{format(new Date(datePublished), "LLLL d yyyy")}</time>
            <p>{isbn}</p>
          </div>
          <Link href={`/books/${id}`}>
            <a>MORE</a>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BookCard;
