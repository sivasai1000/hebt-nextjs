import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Box from './box';

const gridVariants = cva('grid gap-6', {
  variants: {
    sm: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    },
    md: {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
    },
    lg: {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      12: 'lg:grid-cols-12',   // ⭐ Added for your hero section
    },
    xl: {
      1: 'xl:grid-cols-1',
      2: 'xl:grid-cols-2',
      3: 'xl:grid-cols-3',
      4: 'xl:grid-cols-4',
      5: 'xl:grid-cols-5',
      12: 'xl:grid-cols-12',  // (Optional but useful)
    },
  },
  defaultVariants: {
    sm: 1,
  },
});

function Grid({ sm, md, lg, xl, className, children, ...props }) {
  return (
    <Box {...props} className={cn(gridVariants({ sm, md, lg, xl }), className)}>
      {children}
    </Box>
  );
}

function GridCol({ className, children, ...props }) {
  return (
    <Box {...props} className={cn('col-span-1', className)}>
      {children}
    </Box>
  );
}

Grid.Col = GridCol;

export default Grid;
