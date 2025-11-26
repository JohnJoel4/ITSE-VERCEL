"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "free" | "paid";
  price?: number;
  capacity?: number;
  registered?: number;
  category: string;
  image?: string;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const spotsLeft = event.capacity && event.registered 
    ? event.capacity - event.registered 
    : null;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      {/* Event Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={event.type === "free" ? "secondary" : "default"} className="font-semibold">
            {event.type === "free" ? "FREE" : `$${event.price}`}
          </Badge>
          <Badge variant="outline" className="bg-background/80 backdrop-blur">
            {event.category}
          </Badge>
        </div>
        {spotsLeft !== null && spotsLeft < 10 && (
          <div className="absolute top-4 right-4">
            <Badge variant="destructive" className="font-semibold">
              Only {spotsLeft} spots left!
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {event.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-3 pb-4">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-blue-600" />
          <span className="font-medium">{event.date}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-purple-600" />
          <span>{event.time}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-pink-600" />
          <span className="line-clamp-1">{event.location}</span>
        </div>

        {event.capacity && event.registered !== undefined && (
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-green-600" />
            <span>{event.registered} / {event.capacity} registered</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        <Button className="w-full font-semibold" size="lg">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
}
