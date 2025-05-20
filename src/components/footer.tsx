export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} Vietnam Community. All rights reserved.
        </p>
        {/* 푸터 링크 또는 기타 정보 */}
        {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
        </div> */}
      </div>
    </footer>
  );
}
