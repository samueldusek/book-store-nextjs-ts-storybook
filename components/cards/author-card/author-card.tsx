import Image from "next/image";
import Link from "next/link";
import useAuthorCardStyles from "./styles";

export type AuthorCardProps = {
  id: string;
  name: string;
  photo: string;
};

const AuthorCard = ({ id, name, photo }: AuthorCardProps) => {
  const classes = useAuthorCardStyles();
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
