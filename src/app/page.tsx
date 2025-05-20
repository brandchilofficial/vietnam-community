import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sampleCards = [
  {
    id: 1,
    category: "여행정보",
    title: "호치민 3박 4일 추천 코스",
    description: "알찬 호치민 여행을 위한 필수 코스들을 소개합니다. 맛집, 관광지, 쇼핑 정보 포함!",
    imageUrl: "", // Placeholder for now
    tags: ["호치민", "자유여행", "3박4일"],
    author: "여행고수",
    date: "2025-05-18",
  },
  {
    id: 2,
    category: "현지업체",
    title: "다낭 최고의 반미 맛집 'Banh Mi Phuong'",
    description: "줄 서서 먹는 다낭 로컬 반미 맛집! 다양한 종류와 합리적인 가격이 매력적입니다.",
    imageUrl: "",
    tags: ["다낭", "맛집", "반미"],
    author: "미식가",
    date: "2025-05-17",
  },
  {
    id: 3,
    category: "구인구직",
    title: "[채용] 한국어 가능 웹 개발자 모집 (경력무관)",
    description: "베트남 현지 IT 기업에서 한국 시장 확대를 위해 웹 개발자를 채용합니다. 함께 성장할 인재를 찾습니다.",
    imageUrl: "",
    tags: ["웹개발", "IT", "정규직"],
    author: "VN Tech",
    date: "2025-05-16",
  },
  {
    id: 4,
    category: "커뮤니티",
    title: "하노이 주말 골프 같이 하실 분?",
    description: "이번 주말 하노이 근교 골프장에서 라운딩 함께 하실 멤버 구합니다. 초보도 환영!",
    imageUrl: "",
    tags: ["하노이", "골프", "주말"],
    author: "골프왕",
    date: "2025-05-18",
  },
];

export default function Home() {
  return (
    <section className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          베트남 생활의 모든 것
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          최신 여행 정보부터 현지 소식, 구인구직까지 베트남 한인 커뮤니티에서 만나보세요.
        </p>
      </div>

      {/* Top Banner Placeholder */}
      <div className="mb-8 w-full h-24 bg-muted/50 flex items-center justify-center border border-dashed rounded-lg">
        <span className="text-muted-foreground text-sm">광고 배너 (예: 728x90 or Responsive)</span>
      </div>

      {/* Latest Posts Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
          최신 게시물
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sampleCards.map((card, index) => (
            <React.Fragment key={`latest-${card.id}`}>
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Image Placeholder</span>
                </div>
                <CardHeader className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">{card.category}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-accent transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {card.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between text-xs text-muted-foreground border-t mt-auto">
                  <span>{card.author}</span>
                  <span>{card.date}</span>
                </CardFooter>
              </Card>
              {/* Inject ad placeholder after the second card for demo */}
              {index === 1 && (
                <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1 h-full min-h-[250px] bg-muted/50 flex items-center justify-center border border-dashed rounded-lg p-4">
                  <span className="text-muted-foreground text-sm text-center">광고 배너 (예: 300x250 or MPU)</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* AI Personalized Feed Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
          회원님을 위한 맞춤 추천 ✨
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Using a sliced and reversed version of sampleCards for variety in demo */}
          {sampleCards.slice(0, 4).reverse().map((card) => (
            <Card key={`recommended-${card.id}`} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image Placeholder</span>
              </div>
              <CardHeader className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">{card.category}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight hover:text-accent transition-colors">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {card.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between text-xs text-muted-foreground border-t mt-auto">
                <span>{card.author}</span>
                <span>{card.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
