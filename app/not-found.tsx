import Link from 'next/link';
import { LogoMark } from '@/components/layout/LogoMark';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <LogoMark className="mb-12" />
      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-slate-light mb-6">Error 404</div>
      <h1 className="text-4xl md:text-6xl font-black text-brand-midnight mb-8 uppercase tracking-tighter">Path Not Found.</h1>
      <p className="text-slate-500 font-light mb-12 max-w-sm">
        The requested operational path does not exist within our digital architecture.
      </p>
      <Link href="/" className="btn-primary">
        Return to Root
      </Link>
    </div>
  );
}
