import { cn } from "@/lib/utils";
import Box from "./box";

function SectionContainer({
  className,
  sectionClassName,
  children,
  ...props
}) {
  return (
    <section
      className={cn(
        "px-[4%] py-8 md:py-12",
        sectionClassName
      )}
      {...props}
    >
      <Box
        className={cn(
          "max-w-screen-2xl w-full mx-auto",
          className
        )}
      >
        {children}
      </Box>
    </section>
  );
}

export default SectionContainer;
