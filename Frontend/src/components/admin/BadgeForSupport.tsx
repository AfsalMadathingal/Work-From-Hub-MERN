import {Badge, Button} from "@nextui-org/react";
import { NotificationIcon } from "./NotificationIcon";


export default function BadgeForSupport({count}: {count: number}) {
  return (
    <Badge content={count} shape="circle" color="danger">
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
      >
       <NotificationIcon  size={20}/>
      </Button>
    </Badge>
  );
}