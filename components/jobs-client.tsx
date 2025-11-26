"use client";

import { useState } from "react";
import { JobCard, Job } from "@/components/job-card";
import { JobFilters, JobFilterState } from "@/components/job-filters";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface JobsClientProps {
  initialJobs: Job[];
}

export function JobsClient({ initialJobs }: JobsClientProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);

  const handleFilterChange = (filters: JobFilterState) => {
    let filtered = initialJobs;

    // Keyword filter
    if (filters.keyword) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Remote filter
    if (filters.remote) {
      filtered = filtered.filter(job => job.remote);
    }

    // Job type filter
    if (filters.types.length > 0) {
      filtered = filtered.filter(job => filters.types.includes(job.type));
    }

    // Experience filter
    if (filters.experience.length > 0) {
      filtered = filtered.filter(job => filters.experience.includes(job.experience));
    }

    // Salary filter
    if (filters.salaryMin > 0) {
      filtered = filtered.filter(job => job.salary.min >= filters.salaryMin);
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(job => filters.categories.includes(job.category));
    }

    setFilteredJobs(filtered);
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
          <JobFilters onFilterChange={handleFilterChange} />
        </aside>

        {/* Jobs Grid */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"} Found
            </h2>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No jobs found matching your filters. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
