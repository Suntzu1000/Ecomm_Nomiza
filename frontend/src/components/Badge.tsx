import { BadgeSize, BadgeVariant } from "../types/badge";

interface BadgeProps {
    children: React.ReactNode;
    variant: BadgeVariant;
    size: BadgeSize;
    pill?: boolean;

  }
  
  const Badge: React.FC<BadgeProps> = ({ variant, size, children, pill }) => {

    const SIZE_MAPS: Record<BadgeSize, string> = {
        [BadgeSize.SMALL]: 'px-3.5 text-xs',
        [BadgeSize.LARGE]: 'px-5 text-sm',
      };
      const VARIANT_MAPS: Record<BadgeVariant, string> = {
        [BadgeVariant.ERROR]: 'bg-red-100 text-red-800',
        [BadgeVariant.NOTE]: 'bg-yellow-100 text-yellow-800',
        [BadgeVariant.SUCCESS]: 'bg-green-100 text-green-800',
        [BadgeVariant.INFO]: 'bg-blue-100 text-blue-800',
      };
      

    return (
      <span
        className={`inline-flex items-center px-4.5 ${pill ? 'rounded-full' : 'rounded-lg'} ${SIZE_MAPS[size]} ${VARIANT_MAPS[variant]}`}
      >
        {children}
      </span>
    );
  };

  export default Badge
  
