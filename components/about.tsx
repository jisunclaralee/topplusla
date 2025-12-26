import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, Users, Award } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Shield,
      title: "30년 실무 경험",
      description: "삼성화재 28년, K손해사정 2년의 풍부한 현장 경험으로 모든 사례에 대응합니다",
    },
    {
      icon: Users,
      title: "의뢰인 중심",
      description: "보험사가 아닌 의뢰인 편에서 정당한 권익을 지키는 손해사정사입니다",
    },
    {
      icon: Award,
      title: "전문 분야",
      description: "화재(누수), 배상책임, 상해진단금 등 다양한 분야의 전문성을 보유하고 있습니다",
    },
    {
      icon: TrendingUp,
      title: "최상의 서비스",
      description: "철저한 준비와 분석으로 정당한 보상을 받을 수 있도록 최선을 다합니다",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/professional-insurance-loss-adjuster-reviewing-doc.jpg" alt="손해사정 배경" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            탑플러스 손해사정을 소개합니다
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            사고는 예고없이 찾아오지만, 손해보상은 철저하게 준비해야 정당한 보상을 받을 수 있습니다
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
