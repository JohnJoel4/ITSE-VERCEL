"use client";

import { useState } from "react";
import { EventCard, Event } from "@/components/event-card";
import { EventFilters, FilterState } from "@/components/event-filters";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface EventsClientProps {
  initialEvents: Event[];
}

export function EventsClient({ initialEvents }: EventsClientProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = initialEvents;

    // Keyword filter
    if (filters.keyword) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    // Date filter
    if (filters.date) {
      filtered = filtered.filter(event => event.date.includes(filters.date));
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(event =>
        event.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Type filter
    if (filters.types.length > 0) {
      filtered = filtered.filter(event => filters.types.includes(event.type));
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(event => filters.categories.includes(event.category));
    }

    setFilteredEvents(filtered);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Sidebar Filters */}
        <aside className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
          <EventFilters onFilterChange={handleFilterChange} />
        </aside>

        {/* Events Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"} Found
            </h2>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No events found matching your filters. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
