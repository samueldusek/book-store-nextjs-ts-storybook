import Image from "next/image";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import { styles } from "./styles";

interface AuthorCardProps {
  id: string;
  name: string;
  photo: string;
}

const useStyles = createUseStyles(styles);

const AuthorCard = ({ id, name, photo }: AuthorCardProps) => {
  const classes = useStyles();
  return (
    <div className={classes.Card}>
      <Link href={`/authors/${id}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={photo}
              alt="Author's avatar."
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <p className={classes.name}>{name}</p>
        </a>
      </Link>
    </div>
  );
};

export default AuthorCard;
