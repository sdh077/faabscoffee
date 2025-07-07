import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroHighlightDemo() {
  return (
    <section className="py-16 border-dashed border-b-2 border-primary">
      <div className="container flex flex-col items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <Image src="/fafago.png" alt="파파고" width={248} height={350} />
          <div>감사합니다.</div>
          <div>납품 상담 신청이 완료되었습니다.</div>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 w-fit pb-1 px-2 border-2 border-primary text-sm">
          <div>납품 상담신청 확인 후 순차적으로 연락드립니다.</div>
          <Link href={'/'}><Button>메인으로</Button></Link>
        </div>
      </div>
    </section>
  );
}
