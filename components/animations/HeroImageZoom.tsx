"use client";

import { Children, isValidElement } from "react";
import { motion } from "framer-motion";

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function HeroImageZoom({
  children,
  active = true, // 👈 add this
}: {
  children: React.ReactNode;
  active?: boolean; // 👈 add this
}) {
  const child = Children.only(children);
  if (!isValidElement<ImgProps>(child) || child.type !== "img") {
    return <>{children}</>;
  }
  const props = child.props as ImgProps;
  const {
    src,
    srcSet,
    sizes,
    alt,
    className,
    style,
    loading,
    decoding,
    crossOrigin,
    referrerPolicy,
    width,
    height,
    draggable,
  } = props;

  return (
    <motion.img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding={decoding}
      crossOrigin={crossOrigin}
      referrerPolicy={referrerPolicy}
      width={width}
      height={height}
      draggable={draggable}
      animate={active ? { scale: [1, 1.05, 1] } : { scale: 1 }} // 👈 only animate when active
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
