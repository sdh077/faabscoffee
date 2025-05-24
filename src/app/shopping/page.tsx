'use client'

import { useState } from 'react'
import * as XLSX from 'xlsx'

export default function ExcelPage() {
  const initialCounts: Record<string, number> = {
    "커피=#1 탄자니아 아카시아 힐스 SL28 워시드, 중량=200g": 0,
    "커피=#2 코스타리카 로스 산토스 마운틴 워터 프로세스 디카페인, 중량=200g": 0,
    "커피=#3 르완다 봄보 레드버번 허니, 중량=200g": 0,
    "커피=#4 인도네시아 자바 프린사 에스테이트 허니 사카릭, 중량=200g": 0,
    "커피=#5 에티오피아 알로 타미루 무라고 내추럴, 중량=200g": 0,
    "커피=#6 에티오피아 알로 타미루 미리가 내추럴, 중량=200g": 0,
    "커피=#7 케냐 챕상고 힐스 NSB 내추럴, 중량=200g": 0,
    "커피=#8 콜롬비아 로스 노갈레스 카스티요 디카프34, 중량=200g": 0,
    "커피=#9 볼리비아 로사리오 핀카 이사벨 게이샤 워시드, 중량=100g": 0,
    "커피=#10 브라질 곤티조 세루시 카샤사 이스트 무산소 내추럴 72hr (다테하 옥션), 중량=100g": 0,
    "커피=#11 페루 드레이데 페레즈 델가도 옐로우 레드 게이샤 무산소 (치차 챌린지 옥션), 중량=100g": 0,
    "커피=#12 콜롬비아 라스 마가리타스 수단 루메 내추럴, 중량=100g": 0,
    "커피=#13 예멘 부두르 우다이니 진테제 바서가이스트, 중량=100g": 0,
    "커피=#14 파나마 핀카 누구오 게이샤 내추럴(427-N-NF), 중량=20g": 0,
    "커피=#15 파나마 알토 밤비토 티피카 허니, 중량=100g": 0,
    "커피=홈타운 블렌드, 중량=200g": 0,
    "커피=홈타운 블렌드, 중량=500g": 0,
    "커피=홈타운 블렌드, 중량=1kg": 0,
    "커피=파브스 다크 블렌드, 중량=200g": 0,
    "커피=파브스 다크 블렌드, 중량=500g": 0,
    "커피=파브스 다크 블렌드, 중량=1kg": 0,
    "커피=모건 타운 블렌드, 중량=200g": 0,
    "커피=모건 타운 블렌드, 중량=500g": 0,
    "커피=모건 타운 블렌드, 중량=1kg": 0,
    "커피=[기획상품] 커피 패밀리 세트, 중량=해당없음": 0,
    "커피=동결건조 커피 - 홈타운 블렌드, 중량=해당없음": 0,
    "커피=뉴 키즈 온 더 커피 - 커피 품종의 미래 (언스페셜티 블렌드), 중량=100g": 0,
    "커피=빅뱅 띠오리 - 커피 품종의 시작 (언스페셜티 블렌드), 중량=200g": 0,
    "커피=드립백 - 모건타운 블렌드, 중량=해당없음": 0,
    "커피=드립백 - 홈타운 블렌드, 중량=해당없음": 0,
    "커피=언스페셜티 분쇄도 가이드 종이(구매 1건당 최대 1개 제공), 중량=해당없음": 0,
  }

  const [itemCounts, setItemCounts] = useState<Record<string, number>>(initialCounts)

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][]

    const updatedCounts: Record<string, number> = {} // 매 업로드마다 초기화

    jsonData.forEach(row => {
      const itemName = row[4]?.trim()
      const quantity = Number(row[6]) || 1
      if (itemName) {
        if (updatedCounts.hasOwnProperty(itemName)) {
          updatedCounts[itemName] += quantity
        } else {
          updatedCounts[itemName] = quantity
        }
      }
    })

    setItemCounts({ ...initialCounts, ...updatedCounts }) // 초기화 후 새 데이터 반영
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">엑셀 업로드 및 초기화 카운트</h1>
      <input type="file" accept=".xlsx, .xls, .csv" onChange={handleFile} className="mb-4" />
      {Object.entries(itemCounts).map(([key, value]) =>
        <div key={key}>{key} : {value}</div>
      )}
    </div>
  )
}
