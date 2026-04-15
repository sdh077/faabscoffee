import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        <Image
          src="/fafabean.png"
          alt="파브스커피"
          width={320}
          height={320}
          className="object-contain"
        />
        <div className="flex flex-col gap-6">
          <div className="text-3xl md:text-4xl font-bold">감사합니다.</div>
          <div className="text-lg text-muted-foreground leading-8">
            납품 상담 신청이 완료되었습니다.<br />
            확인 후 순차적으로 연락드리겠습니다.
          </div>
          <div className="border-2 border-primary px-6 py-4 text-sm text-muted-foreground">
            납품 상담신청 확인 후 순차적으로 연락드립니다.
          </div>
          <Link href={'/'}><Button className="w-fit">메인으로</Button></Link>
        </div>
      </div>
    </section>
  );
}
