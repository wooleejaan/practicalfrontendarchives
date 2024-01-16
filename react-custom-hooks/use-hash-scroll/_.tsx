import type { ComponentProps, ReactElement } from "react";
import React, { forwardRef } from "react";
import NextLink from "next/link";

type AnchorProps = Omit<ComponentProps<"a">, "ref"> & {
  newWindow?: boolean;
  prefetch?: boolean;
};

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function (
  { href = "", children, newWindow, prefetch = true, ...props },
  // ref is used in <NavbarMenu />
  forwardedRef
): ReactElement {
  if (newWindow) {
    return (
      <a
        href={href}
        ref={forwardedRef}
        rel="noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }

  if (!href) {
    return (
      <a ref={forwardedRef} {...props}>
        {children}
      </a>
    );
  }

  if (href.includes("#")) {
    return (
      <a href={href} ref={forwardedRef} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} prefetch={prefetch} ref={forwardedRef} {...props}>
      {children}
    </NextLink>
  );
});
