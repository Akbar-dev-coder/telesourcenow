"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const mockJobs = [
  {
    id: 1,
    title: "Junior UI/UX Designer",
    location: "Pune Maharashtra",
    type: "Full time",
    workplace: "On-site",
    department: "Engineering",
    posted: "6 days ago",
  },
  {
    id: 2,
    title: "Junior UI/UX Designer",
    location: "India",
    type: "Part time",
    workplace: "Remote",
    department: "Support",
    posted: "2 days ago",
  },
];

export default function JobListings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    workplace: "",
    location: "",
    department: "",
    type: "",
  });

  const clearFilters = () => {
    setFilters({
      workplace: "",
      location: "",
      department: "",
      type: "",
    });
    setSearchQuery("");
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredJobs = mockJobs.filter((job) => {
    return (
      (!filters.workplace || job.workplace === filters.workplace) &&
      (!filters.location || job.location.includes(filters.location)) &&
      (!filters.department || job.department === filters.department) &&
      (!filters.type || job.type === filters.type) &&
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <Input
          placeholder="Search jobs..."
          className="flex-1 min-w-[200px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Workplace Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[150px]">
              {filters.workplace || "Workplace type"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Hybrid", "Remote", "On-site"].map((type) => (
              <DropdownMenuItem
                key={type}
                onSelect={() => handleFilterChange("workplace", type)}
              >
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Location Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[150px]">
              {filters.location || "Location"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["India", "Pune Maharashtra"].map((loc) => (
              <DropdownMenuItem
                key={loc}
                onSelect={() => handleFilterChange("location", loc)}
              >
                {loc}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Department Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[150px]">
              {filters.department || "Department"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Engineering", "Support"].map((dep) => (
              <DropdownMenuItem
                key={dep}
                onSelect={() => handleFilterChange("department", dep)}
              >
                {dep}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Work Type Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[150px]">
              {filters.type || "Work type"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Full time", "Part time"].map((t) => (
              <DropdownMenuItem
                key={t}
                onSelect={() => handleFilterChange("type", t)}
              >
                {t}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          className="text-gray-500"
          onClick={clearFilters}
        >
          ↻ Clear filters
        </Button>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(
          ([key, value]) =>
            value && (
              <Badge key={key} variant="secondary">
                {value}{" "}
                <span
                  className="ml-1 cursor-pointer"
                  onClick={() => handleFilterChange(key, "")}
                >
                  ✕
                </span>
              </Badge>
            )
        )}
      </div>
      <div className="space-y-8">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border-t pt-4 flex flex-col sm:flex-row sm:items-start gap-4 md:justify-between"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                <Link href="/jobdetails" jobtitle={job.title}>
                  {job.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm">Posted {job.posted}</p>
            </div>
            <div>{job.workplace}</div>
            <div>
              <p>{job.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span>{job.type}</span>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
}
