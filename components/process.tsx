import { Card, CardContent } from "@/components/ui/card"

export function Process() {
  const steps = [
    {
      number: "01",
      title: "무료 상담",
      description: "전화 또는 이메일을 통한 사고 내용 확인 및 초기 상담",
    },
    {
      number: "02",
      title: "사고 조사",
      description: "현장 방문 및 사고 원인 분석, 피해 범위 확정",
    },
    {
      number: "03",
      title: "자료 준비",
      description: "손해액 산정 및 보상청구에 필요한 증빙자료 수집",
    },
    {
      number: "04",
      title: "보험사 협상",
      description: "보험사와의 협상을 통한 적정 보상금 산정",
    },
    {
      number: "05",
      title: "보상 완료",
      description: "보험금 지급 확인 및 사후 관리",
    },
  ]

  return (
    <section id="process" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">업무 프로세스</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            체계적이고 투명한 프로세스로 최상의 결과를 만들어냅니다
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="border-border hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
