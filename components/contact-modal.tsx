"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, CheckCircle2 } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create email body
    const emailBody = `
이름: ${formData.name}
이메일: ${formData.email}
연락처: ${formData.phone}
제목: ${formData.subject}

문의내용:
${formData.message}
    `.trim()

    // Send email using API route
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: ["gilwoo1538@naver.com", "jisunclaralee@gmail.com"],
          subject: `[상담문의] ${formData.subject}`,
          body: emailBody,
          replyTo: formData.email,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          })
          setIsSubmitted(false)
          setIsSubmitting(false)
          onOpenChange(false)
        }, 3000)
      } else {
        alert("이메일 전송에 실패했습니다. 다시 시도해 주세요.")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("이메일 전송 중 오류가 발생했습니다.")
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="py-12 text-center">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
            <DialogTitle className="text-2xl font-bold text-foreground mb-2">접수완료되었습니다</DialogTitle>
            <DialogDescription className="text-base">확인 후 안내드리겠습니다.</DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">무료 상담 접수</DialogTitle>
              <DialogDescription className="text-base">
                문의 내용을 작성해 주시면 이메일로 확인 후 답변드립니다.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름 *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일 *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">연락처</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-1234-5678"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">제목 *</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="예) 화재 손해 상담 문의"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">문의 내용 *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="상담하실 내용을 자세히 작성해 주세요."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                <Mail className="mr-2 h-5 w-5" />
                {isSubmitting ? "전송 중..." : "상담 신청하기"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                평일 09:00 - 18:00 | 토요일 09:00 - 13:00 | 일요일·공휴일 휴무
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
