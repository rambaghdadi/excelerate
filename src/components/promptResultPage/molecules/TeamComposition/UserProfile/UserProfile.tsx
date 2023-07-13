import Image from "next/image"
import classes from "./UserProfile.module.css"

interface IUserProfile {
  role: string
  number?: number
}

//TODO map images to role

export default function UserProfile({role, number}: IUserProfile) {
  return (
    <div>
      <div className={classes.imageContainer}>
        <Image
          src={"/images/avatars/man-avatar.png"}
          width={90}
          height={90}
          alt="generic user profile"
        />
        {number && <p className={classes.number}>{number}</p>}
      </div>
      <p className={classes.role}>{role}</p>
    </div>
  )
}
