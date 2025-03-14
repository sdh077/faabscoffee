import React from 'react'

const page = () => {
  const docs = {
    title: '원가 및 마진율 계산',
    writer: '이준선',
    writerDescription: '파브스 커피의 로스터이자 공동대표. 7년간 토석류와 하천의 세굴 현상과 관련된 수리학(hydraulics) 연구를 수행했으며 다수의 학회 수상, 논문 작성 및 프로젝트의 경력을 소유. 커피 연구를 통한 사회공헌을 최종 목표로 가지고 있음.',
    content: `
    원가 및 마진율을 계산하기 앞서 필자에 대해 소개하고자 한다. 필자는 가격 결정과 관련된 회계학적인 지식과는 상관없는 공학을 연구하였다. 공학이라는 학문은 정확한 답을 찾기보다 최적의 근사치를 찾는 것을 목표로 한다. 따라서 공학도의 관점으로 원가 및 마진율과 관련된 변수를 종합하여 계산된 가격이 최적의 값으로 결정되었는지 고민을 하였었다. 일반적으로 재료비는 가격의 30%, 인건비는 30% 등 대략적인 비율을 사용하라고 제안하지 계산식을 각자의 상황에 어떻게 적용해 메뉴 가격의 최적 값을 찾는 과정에 대해서 이야기하지는 않는다. 따라서 본론에서는 가격의 최적 값을 어떻게 찾아나가는지에 대해 살펴보고자 한다. 서론이 다소 장황하지만 내용의 핵심은 가격 결정에 대해 심사숙고를 하여 가격 계산의 논리가 각자에게 타당하게 구성된다면 그것이 각자에게 적절한 원가와 마진율이라는 것이다.
<br/>
<br/>
      - 원가 및 마진율의 초기 구성 단계<br/>
      원가는 크게 재료비, 노무비, 경비로 나눠질 것이고 마진율은 원가와 판매가의 차액인 마진과 판매가에 대한 비율로 계산될 것이다. 여기서 카페에서 마진은 무엇을 의미하는 것일지 고민을 해보자. 처음부터 브랜딩과 운영 시스템이 잘 구축된 카페가 아닌 이상 카페를 운영하는 사람의 시간과 노력에 대한 인건비 그리고 유지관리비 및 개발비 정도로 생각해 볼 수 있지 않을까 싶다. 사실 마진이라는 개념이 모호하기 때문에 많은 사람들이 마진이라는 단어에 현혹되어 실질적으로 투입되는 운영자의 노동력과 유지관리비를 간과하는 경우를 꽤나 볼 수 있을 것이다. 이제 각자에게 맞는 원가와 마진을 나열하여 계산해 보면 될 것이다. 원가와 마진의 예시는 다음과 같다. 재료비, 포장비, 인건비, 광고비, 수도 요금, 가스 요금, 포스 비용, 전기 요금, 임대료, 관리비, 투자 비용에 대한 감가상각비, 대출에 대한 이자비용, 보험료, 투자 및 개발비 등. 원가 및 마진율의 초기 구성 단계에서 최대한 구체적으로 계산하면 좋겠지만 대략적인 값을 보는 것이 목적이므로 구체적이지 않아도 괜찮다. 왜냐하면 재료비와 포장비 같은 운영자가 수정 가능한 항목은 원가 및 마진율을 다듬어 가는 과정에 따라 계속 조정되며 거듭 수정을 거치게 될 것이기 때문이다.
<br/><br/>
      - 원가 및 마진율의 검토 단계<br/>
      원가 및 마진율을 대략적으로 계산해 보았다면 계산된 값을 검토 해봐야 될 것이다. 상권 분석과 맥락을 같이하며 주변 상권의 예상 매출액을 가늠하여 검토를 한다. 여기서 주변 상권이란 자신이 목표하는 운영 방식과 비슷한 카페들을 말하며 그런 카페가 없다면 다른 지역의 비슷한 상권을 살펴보거나 요식업을 하는 매장을 찾아보는 것도 방법일 것이다. 주변 상권의 예상 매출액을 계산하는 첫 번째 방법은 상대적 비교를 목표로 한 상점에 방문하여 실제 방문되는 인원과 객단가를 유추해 계산을 해보는 것이다. 두 번째는 소상공인포털(www.sbiz.or.kr)에 방문하면 상권분석과 통계자료를 열람하여 주변 상권의 매출액을 대략적으로 살펴볼 수 있다. 자료를 이용할 때 주의할 점은 통계의 오류가 발생된다는 것을 유의하면서 자료 해석을 해야 된다는 것이다. 예를 들면 통계 자료에는 큰 규모의 카페나 유명 프랜차이즈 카페의 매출액이 분석되어 있는데 자신이 운영할 소규모의 카페에 해당 매출액을 적용하여 희망 회로를 돌리고 있으면 안 된다는 것이다. 세 번째는 유동인구를 살펴보고 매출액을 상상해 보는 것이다. 실제 자신이 운영할 카페 주변을 돌아다니는 유동인구를 조사하고 자신의 카페를 이용할 인원을 상상하여 매출액을 가늠해 보는 것이다. 이 외에 주변 상권의 매출액을 가늠할 수 있는 방법이 있다면 앞에 제시한 방법들과 더불어 활용해 보면 된다. 앞선 원가 및 마진율의 초기 단계에서 계산된 매출액이 주변 상권의 매출액과 차이가 크다면 원가 및 마진율 초기 단계의 계산이 수정이 필요하다는 의미를 가질 것이다.
<br/><br/>
      - 원가 및 마진율의 보완 단계<br/>
      위의 단계들은 실제 매장을 방문하는 손님으로 발생되는 매출액에 초점이 맞춰진 방법으로 다양한 매출 통로를 이용하는 카페에는 적합한 원가 및 마진율이 아닐 것이다. 그렇다면 각 매장의 특성을 고려하여 계산을 보완해야 될 것이다. 요즘의 시장 흐름을 보면 배달과 온라인 매출 중심으로 운영되는 카페들이 많아지고 있다. 이 같은 카페들은 원가 및 마진율을 검토하는 단계에서 방법을 달리해야 될 것이다. 배달에 대한 매출을 고려하게 되면 배달 수수료와 운임비가 고려되므로 마진이 다소 감소될 수 있을 것이다. 온라인 판매를 하는 매장에서는 확실한 마케팅이 없다면 매출에 대한 불확실성이 증가될 것이다. 매장 마다의 매출 전략은 누구보다 운영자가 가장 잘 알고 있어야 되는 것이기에 운영자 스스로 자신의 매장의 특성을 고려하여 원가 및 마진율을 보완하여 구체화해야 될 것이다. 구체화 단계는 앞서서 설명한 원가 및 마진율의 초기 구성과 검토를 통해 진행해야 될 것이다. 다소 어렵겠지만 각 상황에 맞춰 적용할 수 있는 방법을 찾아보길 바란다.
      추가로 이 단계에서 메뉴 가격 설정을 하게 될 것인데 메뉴 가격은 마케팅과 매장의 전략 반영이 되어야 된다고 생각한다. 예를 들어 빙수를 파는 매장에서 빙수 판매 마진을 줄여 흔히 말하는 가성비를 높여 손님을 이끈다든지 또는 자신만의 시그니처 메뉴를 개발하여 가격을 높게 측정하고 소비자들에게 특별한 경험을 선사하는 것 등이 있을 것이다. 물론 산정된 원가 및 마진율을 크게 벗어나지 않는 범위 내에서 메뉴 가격이 결정되어야 될 것이고 소비자들에게 합리적 소비를 하고 있다고 설득하는 것은 운영자의 역량에 달려있을 것이다.
<br/><br/>
      지금까지는 원가 및 마진율에 직접적으로 관련된 인자를 통해 계산을 하는 방법에 대해 서술을 하였다. 추가적으로 각 카페들이 가지고 있는 특별한 가치 또한 원가 및 마진율을 계산함에 있어서 고려를 해야 될 것인데 가치라는 것이 정성적 평가를 통해 가격이라는 숫자로 전환되기 어려운 부분일 것이다. 이 와 같은 고민은 최근 스페셜티 시장에서도 스페셜티 커피의 정의와 커피 한 잔의 가치를 어떻게 평가할지에 대해 논의되고 있는 것으로 알고 있다 (Specialty Coffee Association, Towards a Definition of Specialty Coffee, 2021). 최근까지도 이러한 주제로 논의가 이뤄지고 있다는 것은 그만큼 복잡하고 어렵다는 이야기이다. 앞으로 카페 그리고 커피 시장의 지속가능성을 위해서 현재의 정성적 가치들이 가격으로 전환되는 새로운 시장의 발전을 기대해본다.
      마무리로 이 글에서 작성한 가격의 최적 값을 찾는 과정은 대부분 시장이 결정한 가격을 따라가는 과정이기에 통상적으로 말하는 재료비가 가격의 30%라는 수치에 근접하게 된다. 복잡하지 않고 쉽게 접근해 본다면 통상적인 원가 및 마진율을 따라 해도 된다고 생각한다. 중요한 것은 가격을 도출하는 과정의 논리가 운영자 스스로 이해가 되어야 된다는 것이고 그래야 소비자에게 제품 가격에 대해 효과적인 설득이 가능할 것이다.
      `
  }
  return (
    <div className='container flex flex-col gap-8 my-8'>
      <div className='text-5xl font-semibold font-bebas-neue'>{docs.title}</div>
      <div className='text-md font-bebas-neue'>
        {docs.writer}
        <div>
          {docs.writerDescription}
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: docs.content }}></div>

    </div>
  )
}

export default page