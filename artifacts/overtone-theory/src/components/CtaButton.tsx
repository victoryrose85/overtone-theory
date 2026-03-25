import { ReactNode } from 'react';

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CtaButton({ href, children, className = '', onClick }: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        bg-signal-gold text-abyss font-sans font-bold 
        px-8 py-4 rounded-full
        hover:brightness-110 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]
        transition-all duration-300 transform hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </a>
  );
}
