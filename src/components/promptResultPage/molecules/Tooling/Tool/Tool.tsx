import Spacer from "@/components/general/molecules/Spacer/Spacer"
import classes from "./Tool.module.css"
import Image from "next/image"

interface IToolProps {
  name: string
  price: string
  numberOfUsers: number
}

export default function Tool({name, price, numberOfUsers}: IToolProps) {
  return (
    <div className={classes.container}>
      <Spacer alignItems="center" gap={2}>
        <div className={classes.imageContainer}>
          <Image
            src={"/images/avatars/man-avatar.png"}
            width={50}
            height={50}
            alt="tool icon"
          />
        </div>
        <div>
          <p>{name}</p>
          <p className={classes.price}>{price}</p>
        </div>
      </Spacer>
      <p>{numberOfUsers} users</p>
    </div>
  )
}
