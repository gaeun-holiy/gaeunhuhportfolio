import Link from "next/link";

type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-20 flex w-full justify-between px-[23px] pt-[17px] text-[#141413]">
      <Link href="/" className="top-en block w-[210px] text-[#141413]">
        <p className="font-bold">Gaeun Huh</p>
        <p>Seoul, South Korea</p>
      </Link>
      <p className="font-en pr-[23px]">{title}</p>
    </header>
  );
}
