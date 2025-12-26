import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Train, Building2 } from "lucide-react"

export function Location() {
  const addressInfo = {
    address: "서울시 송파구 오금로 58 (신천동)",
    building: "잠실 아이스페이스빌딩 1312호",
    subway: "잠실역 9번출구 교통회관 뒷편",
  }

  const contactInfo = [{ icon: Mail, label: "이메일", value: "gilwoo1538@naver.com" }]

  return (
    <section id="location" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">오시는 길</h2>
          <p className="mt-4 text-lg text-muted-foreground">찾아오시는 길을 안내해 드립니다</p>
        </div>
        <div className="mb-8 rounded-lg overflow-hidden border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8487!2d127.0856!3d37.5112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzQwLjMiTiAxMjfCsDA1JzA4LjIiRQ!5e0!3m2!1sko!2skr!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                사무소 위치
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">주소</p>
                  <p className="text-muted-foreground">{addressInfo.address}</p>
                  <p className="text-muted-foreground">{addressInfo.building}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                <Train className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">교통편</p>
                  <p className="text-sm text-muted-foreground">지하철 2호선, 8호선 잠실역</p>
                  <p className="text-sm text-muted-foreground font-medium text-foreground">{addressInfo.subway}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/50">
                <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">주차 안내</p>
                  <p className="text-sm text-muted-foreground">건물 내 주차장 이용 가능</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                연락처
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <info.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
              <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                <p className="font-medium text-foreground">운영시간</p>
                <p className="text-sm text-muted-foreground">평일 09:00 - 18:00</p>
                <p className="text-sm text-muted-foreground">토요일 09:00 - 13:00</p>
                <p className="text-sm text-muted-foreground">일요일·공휴일 휴무</p>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground font-medium mb-2">무료 상담 안내</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  보험 보상 문제로 고민하시거나 도움이 필요하신 분은 언제든 연락 주시면 무료 상담을 진행해 드립니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
