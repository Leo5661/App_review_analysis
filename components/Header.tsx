'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@/public/app_imp_ai_logo.svg';
import Github from '@/public/github.svg';
import GitHubDark from '@/public/github_dark.svg';
import { Links } from '@/constants/constants';
import { ThemeSwitch } from './ThemeSwitch';
import { useTheme } from 'next-themes';

type Props = {};

export default function Header({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="sticky left-0 top-0 flex w-full items-center justify-center bg-background px-[0] text-foreground backdrop-blur-sm md:px-[300px]">
      <nav className="flex w-full items-center justify-between">
        <Link href={Links.Home} className="flex items-center justify-center">
          <Image src={Logo} width={70} height={70} alt={'Log'} />
          <div className="ml-[-10px] hidden text-xl drop-shadow-lg hover:underline md:block">
            app_imp.ai
          </div>
        </Link>

        <div className="flex items-center justify-center gap-3">
          <Link href={Links.Github}>
            <Image
              src={theme == 'light' ? GitHubDark : Github}
              width={25}
              height={25}
              alt={'Github'}
            />
          </Link>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
