# TopPlus LA

TopPlus LA 공식 웹사이트

## 🚀 배포

이 프로젝트는 Vercel에 최적화되어 있습니다.

### Vercel로 배포하기

1. **GitHub에 푸시**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Vercel에서 배포**
   - [Vercel](https://vercel.com)에 접속
   - GitHub 계정으로 로그인
   - "Import Project" 클릭
   - 이 저장소 선택
   - 자동으로 Next.js 프로젝트를 감지하고 배포

### 로컬 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 🛠️ 기술 스택

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📝 환경 변수

환경 변수가 필요한 경우 `.env.example`을 복사하여 `.env.local`을 생성하세요:

```bash
cp .env.example .env.local
```

## 📧 연락처 기능

현재 이메일 전송 기능은 시뮬레이션 상태입니다. 실제 이메일을 보내려면 다음 중 하나를 통합하세요:

- [Resend](https://resend.com) (추천)
- SendGrid
- AWS SES
- Nodemailer

## 📄 라이선스

Private
