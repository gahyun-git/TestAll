# TestAll 프로젝트

테스트 사이트 프로젝트로, Django 백엔드와 Next.js 프론트엔드로 구성되어 있습니다.

## 프로젝트 구조

- `testall_backend/`: Django 백엔드 코드
- `testall_frontend/`: Next.js 프론트엔드 코드

## 환경 변수 설정 가이드

이 프로젝트는 `.env` 파일을 사용하여 환경 변수를 관리합니다. 보안상의 이유로 실제 `.env` 파일은 Git에 포함되지 않습니다.

### 환경 변수 설정 방법

1. 백엔드 환경 변수:
   - `testall_backend/.env.example` 파일을 복사하여 같은 위치에 `.env` 파일을 생성합니다.
   - `.env` 파일 내의 값들을 실제 사용할 값으로 변경합니다.
   ```bash
   cp testall_backend/.env.example testall_backend/.env
   ```

2. 프론트엔드 환경 변수:
   - `testall_frontend/.env.example` 파일을 복사하여 같은 위치에 `.env.local` 파일을 생성합니다.
   - `.env.local` 파일 내의 값들을 실제 사용할 값으로 변경합니다.
   ```bash
   cp testall_frontend/.env.example testall_frontend/.env.local
   ```

### 환경 변수 주의사항

- `.env` 파일에는 API 키, 비밀번호 등 민감한 정보가 포함될 수 있으므로 절대 Git에 커밋하지 마세요.
- 팀원들과 환경 변수를 공유할 때는 암호화된 채널을 사용하세요.
- 프로덕션 환경에서는 클라우드 서비스의 환경 변수 관리 기능을 활용하는 것이 좋습니다.

## 개발 환경 설정

(여기에 개발 환경 설정 방법 추가)

## 배포 가이드

(여기에 배포 방법 추가) 