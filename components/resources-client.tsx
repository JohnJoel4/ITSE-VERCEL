"use client";

import { useState } from "react";
import { ResourceCard, Resource } from "@/components/resource-card";
import { ResourceFilters, ResourceFilterState } from "@/components/resource-filters";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface ResourcesClientProps {
  initialResources: Resource[];
}

export function ResourcesClient({ initialResources }: ResourcesClientProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredResources, setFilteredResources] = useState(initialResources);

  const handleFilterChange = (filters: ResourceFilterState) => {
    let filtered = initialResources;

    // Keyword filter
    if (filters.keyword) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        resource.description.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        resource.author?.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    // Type filter
    if (filters.types.length > 0) {
      filtered = filtered.filter(resource => filters.types.includes(resource.type));
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(resource => filters.categories.includes(resource.category));
    }

    // Tags filter
    if (filters.tags.length > 0) {
      filtered = filtered.filter(resource =>
        filters.tags.some(tag => resource.tags.includes(tag))
      );
    }

    setFilteredResources(filtered);
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
          <ResourceFilters onFilterChange={handleFilterChange} />
        </aside>

        {/* Resources Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              {filteredResources.length} {filteredResources.length === 1 ? "Resource" : "Resources"} Found
            </h2>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No resources found matching your filters. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
