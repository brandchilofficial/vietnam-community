import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ListFilter } from "lucide-react";

//  Sample data - in a real app, this would come from an API
const travelPosts = [
  {
    id: "travel-1",
    category: "호치민",
    title: "호치민 벤탄시장 근처 숨은 맛집 추천!",
    description: "벤탄시장 관광객 맛집 말고 현지인들만 아는 찐 로컬 맛집 리스트 공개합니다. 가격도 착해요!",
    imageUrl: "",
    author: "푸드파이터",
    date: "2025-05-15",
    views: 120,
    likes: 15,
  },
  {
    id: "travel-2",
    category: "다낭",
    title: "다낭 바나힐 입장권 싸게 사는 꿀팁 (ft. 케이블카)",
    description: "바나힐 입장권 현장 구매보다 훨씬 저렴하게! 예약 방법과 케이블카 탑승 팁까지 알려드려요.",
    imageUrl: "",
    author: "여행꿀팁봇",
    date: "2025-05-12",
    views: 256,
    likes: 32,
  },
  {
    id: "travel-3",
    category: "하노이",
    title: "하노이 기찻길 마을 최근 방문 후기 (운행 시간표)",
    description: "최근 다시 핫해진 하노이 기찻길 마을! 기차 지나가는 시간과 안전하게 구경하는 법.",
    imageUrl: "",
    author: "하노이안",
    date: "2025-05-10",
    views: 180,
    likes: 22,
  },
  // Add more sample posts if needed
];

export default function TravelPage() {
  return (
    <section className="w-full">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">여행정보</h1>
          <p className="text-muted-foreground mt-1">
            베트남 여행 전문가들의 생생한 경험과 꿀팁을 공유하세요.
          </p>
        </div>
        <Button>새 글 작성</Button>
      </div>

      {/* Top Banner Placeholder */}
      <div className="mb-8 w-full h-24 bg-muted/50 flex items-center justify-center border border-dashed rounded-lg">
        <span className="text-muted-foreground text-sm">여행정보 게시판 광고 (예: 728x90)</span>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="게시물 검색..."
            className="w-full rounded-lg bg-background pl-8"
          />
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <ListFilter className="mr-2 h-4 w-4" />
          필터
        </Button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {travelPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
            {post.imageUrl ? (
              <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image Placeholder</span>
              </div>
            ) : (
              <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image Placeholder</span>
              </div>
            )}
            <CardHeader className="p-4">
              <div className="mb-1 flex items-center gap-2">
                <Badge variant="outline" className="text-xs font-medium">{post.category}</Badge>
              </div>
              <CardTitle className="text-lg leading-tight hover:text-accent transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {post.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-2 flex items-center justify-between text-xs text-muted-foreground border-t mt-auto">
              <div className="flex gap-2">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
              <div className="flex gap-2">
                <span>조회 {post.views}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="mr-2">
          이전
        </Button>
        <Button variant="outline">
          다음
        </Button>
      </div>
    </section>
  );
}
