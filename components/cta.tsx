"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function CTA() {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 bg-card">
            <CardContent className="p-8 sm:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  보험 보상 문제로 고민하고 계신가요?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground text-pretty">
                  이메일로 문의 주시면 확인 후 답변드립니다.
                  <br />
                  무료 상담을 통해 최선의 해결방안을 제시해 드립니다.
                </p>
                <div className="mt-10 flex items-center justify-center">
                  <Button size="lg" className="w-full sm:w-auto" onClick={() => setContactModalOpen(true)}>
                    <Mail className="mr-2 h-5 w-5" />
                    무료 상담 접수
                  </Button>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  평일 09:00 - 18:00 | 토요일 09:00 - 13:00 | 일요일·공휴일 휴무
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  )
}
