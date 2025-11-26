"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X, DollarSign } from "lucide-react";

interface JobFiltersProps {
  onFilterChange: (filters: JobFilterState) => void;
}

export interface JobFilterState {
  keyword: string;
  location: string;
  types: string[];
  experience: string[];
  remote: boolean;
  salaryMin: number;
  categories: string[];
}

export function JobFilters({ onFilterChange }: JobFiltersProps) {
  const [filters, setFilters] = useState<JobFilterState>({
    keyword: "",
    location: "",
    types: [],
    experience: [],
    remote: false,
    salaryMin: 0,
    categories: [],
  });

  const handleFilterChange = (key: keyof JobFilterState, value: any) => {
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

  const handleExperienceToggle = (exp: string) => {
    const newExperience = filters.experience.includes(exp)
      ? filters.experience.filter(e => e !== exp)
      : [...filters.experience, exp];
    handleFilterChange("experience", newExperience);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    handleFilterChange("categories", newCategories);
  };

  const clearFilters = () => {
    const emptyFilters: JobFilterState = {
      keyword: "",
      location: "",
      types: [],
      experience: [],
      remote: false,
      salaryMin: 0,
      categories: [],
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
          <Label htmlFor="keyword">Job Title or Keywords</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="keyword"
              placeholder="e.g. Software Engineer"
              value={filters.keyword}
              onChange={(e) => handleFilterChange("keyword", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, State, or ZIP"
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </div>

        {/* Remote Work */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remote"
            checked={filters.remote}
            onCheckedChange={(checked) => handleFilterChange("remote", checked)}
          />
          <label
            htmlFor="remote"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            Remote Only
          </label>
        </div>

        {/* Job Type */}
        <div className="space-y-3">
          <Label>Job Type</Label>
          <div className="space-y-2">
            {[
              { value: "full-time", label: "Full Time" },
              { value: "part-time", label: "Part Time" },
              { value: "contract", label: "Contract" },
              { value: "internship", label: "Internship" },
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

        {/* Experience Level */}
        <div className="space-y-3">
          <Label>Experience Level</Label>
          <div className="space-y-2">
            {[
              { value: "entry", label: "Entry Level" },
              { value: "mid", label: "Mid Level" },
              { value: "senior", label: "Senior Level" },
              { value: "lead", label: "Lead/Principal" },
            ].map((exp) => (
              <div key={exp.value} className="flex items-center space-x-2">
                <Checkbox
                  id={exp.value}
                  checked={filters.experience.includes(exp.value)}
                  onCheckedChange={() => handleExperienceToggle(exp.value)}
                />
                <label
                  htmlFor={exp.value}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {exp.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Minimum Salary */}
        <div className="space-y-2">
          <Label htmlFor="salary">Minimum Salary (Annual)</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="salary"
              type="number"
              placeholder="0"
              value={filters.salaryMin || ""}
              onChange={(e) => handleFilterChange("salaryMin", parseInt(e.target.value) || 0)}
              className="pl-10"
              step="10000"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {filters.salaryMin > 0 && `$${filters.salaryMin.toLocaleString()}+`}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <Label>Categories</Label>
          <div className="space-y-2">
            {[
              "Software Development",
              "Data Science",
              "DevOps",
              "Cybersecurity",
              "Cloud Computing",
              "Network Engineering",
              "IT Support",
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
      </CardContent>
    </Card>
  );
}
