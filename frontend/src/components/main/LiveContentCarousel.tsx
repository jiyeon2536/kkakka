import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CardContent } from "@/components/ui/card";
import LiveContent from "@/components/main/LiveContent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { BroadcastItemType } from "@/types/broadcastTypes";

export default function LiveContentCarousel() {
  const plugin = useRef(
    // 딜레이 시간 조절
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const token = localStorage.getItem("token");

  const [broadcastList, setBroadcastList] = useState<
    BroadcastItemType[] | null
  >(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/friends/broadcasts`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("라이브", res.data.data);
        console.log(res.data.data);
        setBroadcastList(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Carousel
      opts={{ align: "start" }}
      plugins={[plugin.current]}
      className="h-full w-full"
    >
      <CarouselContent>
        {broadcastList &&
          broadcastList.map((room, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
              <div className="p-1">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <LiveContent liveData={room} />
                </CardContent>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}

// 라이브 유저 수 더미 데이터

// const liveData = [
//   {
//     userId: 1,
//     title: "3연승하고 잔다",
//     profileImage: "/image/profileImage.png",
//     bgImage: "/image/liveImage.png",
//     friends: [
//       { id: 1, image: "/image/joinSample.png" },
//       { id: 2, image: "/image/joinSample.png" },
//       { id: 3, image: "/image/joinSample.png" },
//       { id: 4, image: "/image/joinSample.png" },
//     ],
//   },
//   {
//     userId: 1,
//     title: "2연승하고 잔다",
//     profileImage: "/image/profileImage.png",
//     bgImage: "/image/liveImage.png",
//     friends: [
//       { id: 1, image: "/image/joinSample.png" },
//       { id: 2, image: "/image/joinSample.png" },
//       { id: 3, image: "/image/joinSample.png" },
//       { id: 4, image: "/image/joinSample.png" },
//     ],
//   },
//   {
//     userId: 1,
//     title: "1연승하고 잔다",
//     profileImage: "/image/profileImage.png",
//     bgImage: "/image/liveImage.png",
//     friends: [
//       { id: 1, image: "/image/joinSample.png" },
//       { id: 2, image: "/image/joinSample.png" },
//       { id: 3, image: "/image/joinSample.png" },
//       { id: 4, image: "/image/joinSample.png" },
//     ],
//   },
//   {
//     userId: 1,
//     title: "6연승하고 잔다",
//     profileImage: "/image/profileImage.png",
//     bgImage: "/image/liveImage.png",
//     friends: [
//       { id: 1, image: "/image/joinSample.png" },
//       { id: 2, image: "/image/joinSample.png" },
//       { id: 3, image: "/image/joinSample.png" },
//       { id: 4, image: "/image/joinSample.png" },
//     ],
//   },
// ];
