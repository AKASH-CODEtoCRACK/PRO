import Link from 'next/link';
import Image from 'next/image';
import { branding } from '@/lib/branding';
import { images } from '@/lib/images';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src={images.logo}
          alt={`${branding.name} Logo`}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 leading-tight">
          {branding.name}
        </span>
        <span className="text-xs text-gray-600 leading-tight">
          {branding.description}
        </span>
      </div>
    </Link>
  );
}
