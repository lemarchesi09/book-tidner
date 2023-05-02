
import { Link } from "react-router-dom";
import IconHeart from "../assets/components/IconHeart";
import IconXCircle from "../assets/components/IconXCircle";

function Card({title, img}) {
  return (
    <div className=" flex flex-col items-center w-full">
      <Link className="shadow-2xl" to="#">
        <img
          className="rounded-lg max-w-[15rem] max-h-[20rem]"
          src={img}
          alt=""
        />
      </Link>
      <h3>{title}</h3>
      <div className="flex justify-around py-4 w-1/2">
          <IconXCircle/>

          <IconHeart/>
        
      </div>
    </div>
  );
}

export default Card;
