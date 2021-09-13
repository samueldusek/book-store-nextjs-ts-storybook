import Image from "next/image";
import Link from "next/link";
import ChapterList from "../../lists/chapter-list/chapter-list";
import useMainBookCardStyles from "./styles";
import { format } from "date-fns";
import { useTheme } from "../../../store/theme-context";

export type MainBookCardProps = {
  id: string;
  title: string;
  cover: string;
  datePublished: string;
  isbn: number;
  author: {
    id: string;
    name: string;
  };
  chapters: {
    id: string;
    title: string;
  }[];
};

const MainBookCard = ({
  id,
  title,
  cover,
  datePublished,
  isbn,
  author,
  chapters,
}: MainBookCardProps) => {
  const { theme } = useTheme();
  const classes = useMainBookCardStyles({ theme });
  const datePublishedFormatted = format(new Date(datePublished), "LLLL d yyyy");
  const authorsLink = `/authors/${author.id}`;
  return (
    <section className={classes.MainCard}>
      <h1>{title}</h1>
      <div className={classes.bookContent}>
        <div className={classes.imageBox}>
          <Image
            src={cover}
            alt={title}
            width={400}
            height={638}
            layout="responsive"
          />
        </div>
        <div className={classes.textBox}>
          <header>
            <h4>Author</h4>
            <h2>
              <Link href={authorsLink}>
                <a>{author.name}</a>
              </Link>
            </h2>
          </header>
          <footer>
            <h4>Chapters</h4>
            <ChapterList chapters={chapters} />
            <h4>Published</h4>
            <time>{datePublishedFormatted}</time>
            <h4>ISBN</h4>
            <h3>{isbn}</h3>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default MainBookCard;
