import Image from "next/image";
import Link from "next/link";
import ReactLoading from "react-loading";
import useAuthorCardStyles from "./styles";
import { useTheme } from "../../../store/theme-context";

export type AuthorCardProps = {
  id: string;
  name: string;
  photo: string;
  isLoading?: boolean;
};

const AuthorCard = ({
  id,
  name,
  photo,
  isLoading = false,
}: AuthorCardProps) => {
  const { theme } = useTheme();
  const classes = useAuthorCardStyles({ theme });
  return (
    <div className={classes.Card}>
      {isLoading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={theme.text.color.secondary}
          height={30}
          width={30}
        />
      ) : (
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
      )}
    </div>
  );
};

export default AuthorCard;
