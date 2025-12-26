import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Scale, Briefcase, CheckCircle2 } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Flame,
      title: "화재 및 재물손해",
      description: "화재사고, 누수피해 등 재물 손해에 대한 전문 손해사정",
      details: [
        "화재사고 원인조사 및 손해액 산정",
        "누수피해 범위 확정 및 보상청구",
        "재물손해 증빙자료 수집 및 분석",
        "보험사 협상 및 보상금 청구",
      ],
    },
    {
      icon: Scale,
      title: "배상책임",
      description: "자동차, 근재, 일상생활 등 각종 배상책임 사고 처리",
      details: [
        "자동차 사고 과실비율 분쟁 해결",
        "산업재해 보상 및 손해사정",
        "일상생활 배상책임 사고 처리",
        "법적 책임 범위 확정 및 보상",
      ],
    },
    {
      icon: Briefcase,
      title: "상해 및 질병",
      description: "상해보험, 실손보험 등 인보험 진단금 청구",
      details: [
        "상해보험 진단금 청구 대행",
        "질병보험 보상금 청구 지원",
        "의료기록 분석 및 증빙자료 준비",
        "보험금 부당거절 이의제기",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">전문 서비스 분야</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            최고의 전문성을 바탕으로 최상의 손해사정 서비스를 제공합니다
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-border hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
