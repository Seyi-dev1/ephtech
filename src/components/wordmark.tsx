import Image from "next/image";
import logoColor from "@/assets/images/ephtech-logo-color.png";
import logoLight from "@/assets/images/ephtech-logo-light.png";

type Props = {
  light?: boolean;
  className?: string;
};

export default function Wordmark({ light = false, className = "" }: Props) {
  return (
    <Image
      src={light ? logoLight : logoColor}
      alt=""
      fill
      sizes="148px"
      className={`object-contain object-left ${className}`}
      priority
    />
  );
}
