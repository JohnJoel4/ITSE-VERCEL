"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  FileText, 
  Video, 
  Image as ImageIcon, 
  Download, 
  BookOpen,
  Link2,
  Play,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "link" | "video" | "pdf" | "image" | "document" | "course";
  url: string;
  category: string;
  author?: string;
  thumbnail?: string;
  fileSize?: string;
  duration?: string;
  addedDate: string;
  tags: string[];
}

interface ResourceCardProps {
  resource: Resource;
}

const typeConfig = {
  link: {
    icon: Link2,
    color: "from-blue-500 to-cyan-500",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    action: "Visit Site",
    actionIcon: ExternalLink,
  },
  video: {
    icon: Video,
    color: "from-red-500 to-pink-500",
    badge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    action: "Watch Now",
    actionIcon: Play,
  },
  pdf: {
    icon: FileText,
    color: "from-orange-500 to-amber-500",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    action: "Download PDF",
    actionIcon: Download,
  },
  image: {
    icon: ImageIcon,
    color: "from-purple-500 to-pink-500",
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    action: "View Image",
    actionIcon: Eye,
  },
  document: {
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    action: "Read More",
    actionIcon: ExternalLink,
  },
  course: {
    icon: BookOpen,
    color: "from-indigo-500 to-purple-500",
    badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    action: "Start Course",
    actionIcon: Play,
  },
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const config = typeConfig[resource.type];
  const Icon = config.icon;
  const ActionIcon = config.actionIcon;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      {/* Thumbnail / Header */}
      <div className={cn("relative h-48 bg-gradient-to-br overflow-hidden", config.color)}>
        {resource.thumbnail ? (
          <img 
            src={resource.thumbnail} 
            alt={resource.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-white/80" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={cn(config.badge, "font-semibold capitalize")}>
            {resource.type}
          </Badge>
        </div>

        {/* Duration or File Size */}
        {(resource.duration || resource.fileSize) && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-black/60 text-white border-0">
              {resource.duration || resource.fileSize}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
          {resource.title}
        </h3>
        {resource.author && (
          <p className="text-sm text-muted-foreground mt-1">
            by {resource.author}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-4 pb-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {resource.description}
        </p>

        {/* Category */}
        <div className="flex items-center gap-2">
          <Badge variant="outline">{resource.category}</Badge>
        </div>

        {/* Tags */}
        {resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {resource.tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
            {resource.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{resource.tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          Added {formatDate(resource.addedDate)}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          className="w-full font-semibold" 
          size="lg"
          onClick={() => window.open(resource.url, '_blank')}
        >
          <ActionIcon className="h-4 w-4 mr-2" />
          {config.action}
        </Button>
      </CardFooter>
    </Card>
  );
}
