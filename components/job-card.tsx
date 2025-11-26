"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Clock, Building2, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  experience: "entry" | "mid" | "senior" | "lead";
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  remote: boolean;
  description: string;
  requirements: string[];
  postedDate: string;
  category: string;
  companyLogo?: string;
}

interface JobCardProps {
  job: Job;
}

const typeColors = {
  "full-time": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "part-time": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "contract": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "internship": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

const experienceLabels = {
  entry: "Entry Level",
  mid: "Mid Level",
  senior: "Senior Level",
  lead: "Lead/Principal",
};

export function JobCard({ job }: JobCardProps) {
  const formatSalary = () => {
    return `${job.salary.currency}${(job.salary.min / 1000).toFixed(0)}k - ${job.salary.currency}${(job.salary.max / 1000).toFixed(0)}k`;
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group relative">
      {/* Bookmark Button */}
      <button 
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
        aria-label="Bookmark job"
      >
        <Bookmark className="h-4 w-4" />
      </button>

      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <Building2 className="h-6 w-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold line-clamp-1 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium mt-1">
              {job.company}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pb-4">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge className={cn(typeColors[job.type], "font-medium")}>
            {job.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Badge>
          <Badge variant="outline">{experienceLabels[job.experience]}</Badge>
          {job.remote && (
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
              Remote
            </Badge>
          )}
        </div>

        {/* Job Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-pink-600 flex-shrink-0" />
            <span className="line-clamp-1">{job.location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-green-600 flex-shrink-0" />
            <span className="font-medium">{formatSalary()}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Briefcase className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span>{job.category}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>{getTimeAgo(job.postedDate)}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {job.description}
        </p>
      </CardContent>

      <CardFooter className="pt-0 gap-2">
        <Button className="flex-1 font-semibold" size="lg">
          Apply Now
        </Button>
        <Button variant="outline" size="lg">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
