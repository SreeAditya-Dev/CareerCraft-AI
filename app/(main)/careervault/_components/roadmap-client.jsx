"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      title: "70+ Essential React Interview Questions",
      description: "Comprehensive guide for React interview preparation with detailed answers and examples.",
      type: "PDF",
      status: "available",
      downloads: 1234,
      pdfLink: "https://drive.google.com/file/d/1kM7ApbAVpce1igWdiFz-3sSDoLwcBoaY/view?usp=sharing" // Correct path
    },
    {
      title: "Python DSA + LEETCODE Exercises",
      description: "Master Data Structures & Algorithms with Python through practical LeetCode problems.",
      type: "Video",
      status: "available",
      downloads: 856,
      pdfLink: "https://drive.google.com/file/d/1iDOC-IkYVh46exBta4KlopLio4AM-Twx/view" // Example link
    },
    {
      title: "Apna College DSA Sheet",
      description: "Curated collection of DSA problems to build your problem-solving skills.",
      type: "DSA Sheet",
      status: "available",
      downloads: 2341,
      pdfLink: "https://docs.google.com/spreadsheets/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag/edit?gid=0#gid=0"
    },
    {
      title: "DSA Sheet by Love Babbar",
      description: "DSA sheet by Love Babbar - 450 coding questions",
      type: "PDF",
      status: "available",
      downloads: 943,
      pdfLink: "https://docs.google.com/spreadsheets/d/1m4Ls3x4JOjUY4n_N58GIKwZgKAZAw9O_/edit?rtpof=true&sd=true&gid=1734218842#gid=1734218842"
    },
    {
      title: "System Design Interview by Alex Xu",
      description: "System Design Interview by Alex Xu - 2nd Edition",
      type: "PDF",
      status: "available",
      downloads: 943,
      pdfLink: "https://drive.google.com/file/d/1tGpFFb6gO8G7S8oAyCN2S4cnwPJIRyl9/view?usp=sharing"
    },
    {
      title: "LTI Mindtree Graduate Engineer Trainee 2024 - Sep Exam Paper",
      description: "LTI Mindtree Graduate Engineer Trainee ",
      type: "PDF",
      status: "available",
      downloads: 943,
      pdfLink: "https://drive.google.com/file/d/1j6OFFd1DG-okjyGzbDO37Eqcs2eiXptv/view?usp=sharing"
    },
    {
      title: "Striver's SDE Sheet",
      description: "Striver's SDE Sheet sheet for dsa",
      type: "PDF",
      status: "coming_soon",
      downloads: 943
    },
    {
      title: "NeetCode 150",
      description: "NeetCode 150 dsa 150 days",
      type: "PDF",
      status: "coming_soon",
      downloads: 943
    }
  ];

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Explore Resources</h1>
        <p className="text-gray-400 text-xl">Discover resources to advance your career</p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources..."
              className="pl-10 bg-zinc-900/50 border-zinc-800 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card key={index} className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-semibold text-white mb-2">{resource.title}</h2>
                <p className="text-gray-400 mb-6 flex-grow">{resource.description}</p>

                {/* Button to Open PDF or External Link */}
                {resource.status === "coming_soon" ? (
                  <Button disabled className="w-full bg-zinc-800 text-gray-400 hover:bg-zinc-800 cursor-not-allowed">
                    Coming Soon
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    onClick={() => {
                      if (resource.pdfLink) {
                        window.open(resource.pdfLink, "_blank"); // Opens the link in a new tab
                      }
                    }}
                  >
                    {resource.type === "PDF" ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                    {resource.type === "PDF" ? "Download" : "View Resource"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
