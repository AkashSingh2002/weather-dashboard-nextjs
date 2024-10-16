import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import images
import LondonImage from "../public/images/london.jpg";
import ParisImage from "../public/images/paris.jpg";
import TokyoImage from "../public/images/tokyo.jpg";
import NewYorkImage from "../public/images/new-york.jpg";

const places = [
  {
    name: "London",
    image: LondonImage,
    url: "/location/london-2643743",
  },
  {
    name: "Paris",
    image: ParisImage,
    url: "/location/paris-2968815",
  },
  {
    name: "Tokyo",
    image: TokyoImage,
    url: "/location/tokyo-1850147",
  },
  {
    name: "New York",
    image: NewYorkImage,
    url: "/location/new-york-city-5128581",
  },
];

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url} passHref>
                <div className="places__link-wrapper">
                  <div className="places__image-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={place.image}
                      alt={`${place.name} Image`}
                      fill // Use fill instead of layout="fill"
                      style={{ objectFit: 'cover' }} // Use style prop for objectFit
                    />
                  </div>
                  <span>{place.name}</span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
