"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Leader {
  name: string;
  title: string;
  imagePlaceholder: string;
  bio: string[];
}

interface LeadershipCardsProps {
  leaders: Leader[];
}

export function LeadershipCards({ leaders }: LeadershipCardsProps) {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-12">
      {leaders.map((leader, index) => (
        <div
          key={index}
          ref={(el) => { cardRefs.current[index] = el; }}
          data-index={index}
          className={`transition-all duration-700 ease-out ${
            visibleCards.includes(index)
              ? "opacity-100 translate-x-0"
              : `opacity-0 ${index % 2 === 0 ? "-translate-x-12" : "translate-x-12"}`
          }`}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div 
                    className={`${
                      leader.name === "Susan Bachman" || leader.name === "Jim Conlon" 
                        ? "w-48 h-48" 
                        : "w-48 h-48"
                    } relative rounded-lg overflow-hidden bg-muted`}
                  >
                    <Image
                      src={leader.imagePlaceholder}
                      alt={leader.name}
                      fill
                      className={`${
                        leader.name === "Susan Bachman" || leader.name === "Jim Conlon"
                          ? "object-contain scale-75"
                          : "object-cover"
                      }`}
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="flex-grow">
                  <CardTitle className="text-2xl mb-1">{leader.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary uppercase">
                    {leader.title}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {leader.bio.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
