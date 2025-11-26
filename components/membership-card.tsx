"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MembershipCardProps {
  title: string;
  price: number;
  features: string[];
  tier: "individual" | "student" | "bronze" | "silver" | "gold" | "platinum";
  badge?: string;
}

const tierStyles = {
  individual: {
    gradient: "from-gray-500 to-gray-600",
    hover: "hover:shadow-gray-500/20",
    button: "bg-gray-600 hover:bg-gray-700",
  },
  student: {
    gradient: "from-green-500 to-emerald-600",
    hover: "hover:shadow-green-500/20",
    button: "bg-green-600 hover:bg-green-700",
  },
  bronze: {
    gradient: "from-amber-600 to-amber-700",
    hover: "hover:shadow-amber-500/20",
    button: "bg-amber-600 hover:bg-amber-700",
  },
  silver: {
    gradient: "from-slate-400 to-slate-500",
    hover: "hover:shadow-slate-400/20",
    button: "bg-slate-500 hover:bg-slate-600",
  },
  gold: {
    gradient: "from-yellow-500 to-yellow-600",
    hover: "hover:shadow-yellow-500/20",
    button: "bg-yellow-600 hover:bg-yellow-700",
  },
  platinum: {
    gradient: "from-purple-600 to-indigo-700",
    hover: "hover:shadow-purple-500/30",
    button: "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800",
  },
};

export function MembershipCard({ title, price, features, tier, badge }: MembershipCardProps) {
  const styles = tierStyles[tier];
  const isPopular = tier === "gold" || tier === "platinum";

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:scale-105",
        styles.hover,
        isPopular && "border-2 shadow-lg"
      )}
    >
      {badge && (
        <div className="absolute top-0 right-0">
          <Badge className={cn("rounded-none rounded-bl-lg bg-gradient-to-r", styles.gradient)}>
            {badge}
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-3xl font-bold mt-2">
          <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", styles.gradient)}>
            ${price}
          </span>
          <span className="text-sm text-muted-foreground font-normal">/year</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 pb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <Check className={cn("h-5 w-5 flex-shrink-0 mt-0.5", `text-${tier === 'platinum' ? 'purple' : tier === 'gold' ? 'yellow' : tier === 'silver' ? 'slate' : tier === 'bronze' ? 'amber' : tier === 'student' ? 'green' : 'gray'}-600`)} />
              <span className="text-muted-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button 
          className={cn("w-full font-semibold shadow-lg", styles.button)}
          size="lg"
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
