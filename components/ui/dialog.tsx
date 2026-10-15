"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal(props: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-[#211f1b]/45 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className,
      )}
      data-slot="dialog-overlay"
      {...props}
    />
  );
}

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
  mobileSide?: "bottom" | "full" | "left" | "right";
};

function DialogContent({ className, children, mobileSide = "bottom", ...props }: DialogContentProps) {
  const mobilePosition = mobileSide === "full"
    ? "max-[640px]:inset-0 max-[640px]:h-full max-[640px]:max-h-full max-[640px]:w-full max-[640px]:max-w-none max-[640px]:rounded-none"
    : mobileSide === "left"
    ? "max-[640px]:bottom-0 max-[640px]:left-0 max-[640px]:right-auto max-[640px]:top-0 max-[640px]:h-full max-[640px]:max-h-full max-[640px]:max-w-[min(86vw,380px)] max-[640px]:rounded-none max-[640px]:border-l-0 max-[640px]:border-r max-[640px]:border-t-0 max-[640px]:data-[state=closed]:slide-out-to-left max-[640px]:data-[state=open]:slide-in-from-left"
    : mobileSide === "right"
    ? "max-[640px]:bottom-0 max-[640px]:left-auto max-[640px]:right-0 max-[640px]:top-0 max-[640px]:h-full max-[640px]:max-h-full max-[640px]:max-w-[min(92vw,440px)] max-[640px]:rounded-none max-[640px]:border-l max-[640px]:border-t-0 max-[640px]:data-[state=closed]:slide-out-to-right max-[640px]:data-[state=open]:slide-in-from-right"
    : "max-[640px]:bottom-0 max-[640px]:left-0 max-[640px]:right-0 max-[640px]:top-auto max-[640px]:h-auto max-[640px]:max-h-[88svh] max-[640px]:max-w-none max-[640px]:rounded-t-2xl max-[640px]:border-l-0 max-[640px]:border-t max-[640px]:data-[state=closed]:slide-out-to-bottom max-[640px]:data-[state=open]:slide-in-from-bottom";

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-[440px] flex-col border-l border-[#ddd4c7] bg-[#fcfaf6] p-7 text-[#211f1b] shadow-2xl outline-none data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right sm:p-9",
          mobilePosition,
          className,
        )}
        data-slot="dialog-content"
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("font-[Georgia,Times_New_Roman,serif] text-3xl font-normal tracking-[-.03em]", className)}
      data-slot="dialog-title"
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm leading-6 text-[#736e65]", className)}
      data-slot="dialog-description"
      {...props}
    />
  );
}

function DialogClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger };
