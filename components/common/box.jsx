import { cn } from '@/lib/utils';
import { ReactNode, ElementType } from 'react';

function Box({
  as: Component = 'div',
  className,
  children,
  ...props
}) {
  return (
    <Component
      {...props}
      className={cn(props.className, className)}
    >
      {children}
    </Component>
  );
}

export default Box;
