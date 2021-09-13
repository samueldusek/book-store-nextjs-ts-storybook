import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactLoading from "react-loading";
import useBookCardStyles from "./styles";
import { format } from "date-fns";
import { useTheme } from "../../../store/theme-context";

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
  isLoading?: boolean;
};

const BookCard = ({
  id,
  title,
  cover,
  datePublished,
  isbn,
  author,
  isLoading = false,
}: BookCardProps) => {
  const { theme } = useTheme();
  const classes = useBookCardStyles({ theme });

  const authorsLink = isLoading ? "" : `/authors/${author.id}`;
  const booksLink = isLoading ? "" : `/books/${id}`;
  const formattedDate = isLoading
    ? ""
    : format(new Date(datePublished), "LLLL d yyyy");

  return (
    <div className={classes.Card}>
      {isLoading ? (
        <ReactLoading
          type={"bubbles"}
          color={theme.text.color.secondary}
          height={64}
          width={64}
        />
      ) : (
        <Fragment>
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
                <Link href={authorsLink}>
                  <a>{author.name}</a>
                </Link>
              </h5>
            </header>
            <footer>
              <div>
                <time>{formattedDate}</time>
                <p>{isbn}</p>
              </div>
              <Link href={booksLink}>
                <a>MORE</a>
              </Link>
            </footer>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default BookCard;
