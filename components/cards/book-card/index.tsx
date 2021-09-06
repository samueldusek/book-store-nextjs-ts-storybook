import { FC } from "react";

interface BookCardProps {
    /**
     * BookCard title
     */
    title: string;
  }

const BookCard = ({title}:BookCardProps) => {
    return(
        <div>
            <h3>{title}</h3>
        </div>
    )
};

export default BookCard;