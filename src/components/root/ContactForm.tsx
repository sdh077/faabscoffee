'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { usePathname, useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { useRef } from "react"

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "이름을 입력해주세요.",
  }),
  shop: z.string().min(2, {
    message: "사업장 이름을 입력해주세요",
  }),
  shop_no: z.string(),
  address: z.string(),
  memo: z.string(),
  phone: z.string().min(2, {
    message: "연락처를 입력해주세요",
  }),
  bean: z.array(z.string()),
  description: z.string()
    .max(1000, {
      message: "최대 1000자 입니다.",
    }),
})

const ContactForm = ({ purpose }: { purpose: string }) => {
  const router = useRouter()
  const pathname = usePathname()
  const submitting = useRef(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      shop: "",
      shop_no: "",
      address: "",
      phone: "",
      memo: "",
      bean: [],
      description: `1. 머신
2. 그라인더
3. 정수필터

사업장 평수 / 특이사항 / 주력상품 / 컨셉 등 `,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (submitting.current) return
    submitting.current = true
    try {
      const body = JSON.stringify({ ...data, purpose })
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        body: body,
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const res = await response.json()
      if (res.data) {
        router.push(`${pathname}/confirm`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      submitting.current = false
    }
  }

  const items = [
    { id: "dark", label: "파브스 다크 블렌드" },
    { id: "mogan", label: "모건타운 블렌드" },
    { id: "home", label: "홈타운 블렌드" },
    { id: "single", label: "싱글" },
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 py-10 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>대표자 성함</FormLabel>
                <FormControl>
                  <Input placeholder="대표자 성함을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input placeholder="ex) 010-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shop"
            render={({ field }) => (
              <FormItem>
                <FormLabel>사업장 이름</FormLabel>
                <FormControl>
                  <Input placeholder="사업장 이름을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shop_no"
            render={({ field }) => (
              <FormItem>
                <FormLabel>사업자 번호</FormLabel>
                <FormControl>
                  <Input placeholder="예비 창업자의 경우 오픈 예정일 기입" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>사업자 소재지</FormLabel>
                <FormControl>
                  <Input placeholder="사업장 소재지를 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="memo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>메모</FormLabel>
                <FormControl>
                  <Input placeholder="추가 사항을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {purpose === 'sample' && (
            <FormField
              control={form.control}
              name="bean"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base">희망 원두 선택</FormLabel>
                  <div className="flex flex-col gap-2 pt-1">
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="bean"
                        render={({ field }) => (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center gap-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                      field.value?.filter((value) => value !== item.id)
                                    )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>상세 정보</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="전달 사항을 적어주세요"
                    className="h-48"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">개인정보 활용 동의</p>
            <Textarea
              className="w-full h-32 text-xs text-muted-foreground resize-none"
              readOnly
              value={`안녕하세요?
커피 생산자와 커피 소비자를 연결하는 파브스 커피 도매 사이트 입니다.
회원가입은 무료이며, 기입하신 회원정보는 서비스 외의 목적으로는 사용되지 않습니다.
실명이 아니거나 타인의 주민등록번호를 도용 및 허위로 가입된 아이디는 법적인 보호를 받을 수 없으며, 서비스 이용에 제한을 받게 됩니다.`}
            />
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <Checkbox required />
              동의함
            </label>
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? '제출 중...' : '납품 상담 신청'}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm