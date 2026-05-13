import Link from "next/link";
import Image from "next/image";
import { branding } from "@/lib/branding";
import { images } from "@/lib/images";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-4 ${className}`}>
      <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
        <Image
          src={images.logo}
          alt={`${branding.name} Logo`}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        {/* <span className="text-xl font-bold text-gray-900 leading-tight">
          {branding.name}
        </span> */}
        {/* Company Name */}
        <h1 className="text-[24px] md:text-[38px] font-light tracking-[0.12em] text-[#082B63]">
          <span className="font-semibold">HRPR</span>{" "}
          <span className="font-light">Services</span>{" "}
        </h1>
        <span className="text-xs text-gray-600 leading-tight">
          {branding.description}
        </span>
      </div>
    </Link>
  );
}

// export default function Logo({ className = '' }: { className?: string }) {
//   return (
//     <Link
//       href="/"
//       className={`flex items-center gap-4 ${className}`}
//     >
//       {/* Logo */}
//       <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
//         <Image
//           src={images.logo}
//           alt={`${branding.name} Logo`}
//           fill
//           priority
//           className="object-contain"
//         />
//       </div>

//       {/* Branding */}
//       <div className="flex flex-col leading-none">

//         {/* Company Name */}
//         <h1 className="text-[28px] md:text-[38px] font-light tracking-tight text-black">
//           <span className="font-semibold">HRPR</span>{' '}
//           <span className="font-light">Services</span>
//         </h1>

//         {/* Description from branding.ts */}
//         <p className="mt-1 text-[9px] md:text-[11px] uppercase tracking-[0.18em] text-gray-700 font-medium">
//           {branding.description}
//         </p>
//       </div>
//     </Link>
//   );
// }
