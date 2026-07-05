import Image from "next/image";

const RING_IMAGE_URL =
  "https://z-cdn-media.chatglm.cn/files/b7856fd8-0b72-4e9e-9fb5-39a01fc33c04.png?auth_key=1882569322-9fac5020f7814712ba97dab6343bdd5a-0-fefa8d2824404bfdfb3e1497edf80022";

export default function RingImage({
  className = "",
  alt = "Study Guide Trophy",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src={RING_IMAGE_URL}
      alt={alt}
      width={200}
      height={300}
      className={className}
      unoptimized
    />
  );
}