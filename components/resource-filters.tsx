"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";

interface ResourceFiltersProps {
  onFilterChange: (filters: ResourceFilterState) => void;
}

export interface ResourceFilterState {
  keyword: string;
  types: string[];
  categories: string[];
  tags: string[];
}

export function ResourceFilters({ onFilterChange }: ResourceFiltersProps) {
  const [filters, setFilters] = useState<ResourceFilterState>({
    keyword: "",
    types: [],
    categories: [],
    tags: [],
  });

  const handleFilterChange = (key: keyof ResourceFilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTypeToggle = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    handleFilterChange("types", newTypes);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    handleFilterChange("categories", newCategories);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    handleFilterChange("tags", newTags);
  };

  const clearFilters = () => {
    const emptyFilters: ResourceFilterState = {
      keyword: "",
      types: [],
      categories: [],
      tags: [],
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="h-8 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Keyword Search */}
        <div className="space-y-2">
          <Label htmlFor="keyword">Search Resources</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="keyword"
              placeholder="Search by title or description..."
              value={filters.keyword}
              onChange={(e) => handleFilterChange("keyword", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Resource Type */}
        <div className="space-y-3">
          <Label>Resource Type</Label>
          <div className="space-y-2">
            {[
              { value: "video", label: "Video" },
              { value: "link", label: "External Link" },
              { value: "pdf", label: "PDF Document" },
              { value: "document", label: "Article/Guide" },
              { value: "course", label: "Online Course" },
              { value: "image", label: "Image/Infographic" },
            ].map((type) => (
              <div key={type.value} className="flex items-center space-x-2">
                <Checkbox
                  id={type.value}
                  checked={filters.types.includes(type.value)}
                  onCheckedChange={() => handleTypeToggle(type.value)}
                />
                <label
                  htmlFor={type.value}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <Label>Categories</Label>
          <div className="space-y-2">
            {[
              "Programming",
              "Cloud Computing",
              "Cybersecurity",
              "DevOps",
              "Data Science",
              "Networking",
              "Career Development",
              "Certifications",
            ].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category.toLowerCase().replace(/\s+/g, '-')}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                />
                <label
                  htmlFor={category.toLowerCase().replace(/\s+/g, '-')}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tags */}
        <div className="space-y-3">
          <Label>Popular Tags</Label>
          <div className="space-y-2">
            {[
              "Beginner Friendly",
              "Advanced",
              "Free",
              "Certification Prep",
              "Hands-on",
              "Tutorial",
            ].map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={tag.toLowerCase().replace(/\s+/g, '-')}
                  checked={filters.tags.includes(tag)}
                  onCheckedChange={() => handleTagToggle(tag)}
                />
                <label
                  htmlFor={tag.toLowerCase().replace(/\s+/g, '-')}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
