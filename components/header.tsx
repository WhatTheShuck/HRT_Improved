import Image from "next/image";
import Link from "next/link";
import { companyDetails } from "@/lib/data";
import { ModeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src={companyDetails.logoPath}
            alt={`${companyDetails.name} Logo`}
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-foreground">
            HRT Improved
          </span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
