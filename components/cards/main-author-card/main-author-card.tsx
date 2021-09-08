import Image from "next/image";
import useMainAuthorCardStyles from "./styles";
import { format } from "date-fns";

export type MainAuthorCardProps = {
  id: string;
  name: string;
  photo: string;
  birthplace: string;
  dateOfBirth: string;
  dateOfDeath: string;
};

const MainAuthorCard = ({
  id,
  name,
  photo,
  birthplace,
  dateOfBirth,
  dateOfDeath,
}: MainAuthorCardProps) => {
  const classes = useMainAuthorCardStyles();
  const dateOfBirthFormatted = format(new Date(dateOfBirth), "LLLL d yyyy");
  const dateOfDeathFormatted = format(new Date(dateOfDeath), "LLLL d yyyy");
  return (
    <section className={classes.MainCard}>
      <h1>{name}</h1>
      <div className={classes.authorContent}>
        <div className={classes.imageBox}>
          <Image
            src={photo}
            alt={name}
            width={324}
            height={343}
            layout="responsive"
          />
        </div>
        <div className={classes.textBox}>
          <header>
            <h4>Birthplace</h4>
            <h3>{birthplace}</h3>
          </header>
          <footer>
            <h4>Born</h4>
            <time>{dateOfBirthFormatted}</time>
            <h4>Passed</h4>
            <time>{dateOfDeathFormatted}</time>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default MainAuthorCard;
