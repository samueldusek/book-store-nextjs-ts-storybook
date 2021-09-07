import Image from "next/image";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import { styles } from "./styles";
import { format } from "date-fns";

interface BookCardProps {
  id: string;
  title: string;
  cover: string;
  datePublished: string;
  isbn: number;
  author: {
    id: string;
    name: string;
  };
}

const useStyles = createUseStyles(styles);

const BookCard = ({
  id,
  title,
  cover,
  datePublished,
  isbn,
  author,
}: BookCardProps) => {
  const classes = useStyles();
  return (
    <div className={classes.Card}>
      <div className={classes.imageBox}>
        <Image
          src={cover}
          alt={title}
          width={141}
          height={220}
          layout="responsive"
        />
      </div>
      <div className={classes.textBox}>
        <h3 className={classes.heading}>{title}</h3>
        <h5 className={classes.author}>
          <Link href={`/authors/${author.id}`}>
            <a>{author.name}</a>
          </Link>
        </h5>
        <footer className={classes.footer}>
          <div>
            <time>{format(new Date(datePublished), "do 'of' LLLL yyyy")}</time>
            <p className={classes.isbn}>{isbn}</p>
          </div>
          <Link href={`/books/${id}`}>
            <a className={classes.link}>MORE</a>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BookCard;
