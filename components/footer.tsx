import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-xl font-bold text-primary">탑플러스</span>
              <span className="text-sm text-muted-foreground">손해사정사무소</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              30년 경력의 전문성으로 의뢰인의 정당한 권익을 보호하는 손해사정 전문가입니다.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">빠른 메뉴</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  사무소 소개
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  전문분야
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  업무프로세스
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">사무소 정보</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>서울시 송파구 오금로 58</li>
              <li>잠실 아이스페이스빌딩 1312호</li>
              <li className="pt-2 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                gilwoo1538@naver.com
              </li>
              <li className="pt-2">평일 09:00 - 18:00</li>
              <li>토요일 09:00 - 13:00</li>
              <li>일요일·공휴일 휴무</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 탑플러스 손해사정사무소. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
