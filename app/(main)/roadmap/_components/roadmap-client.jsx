"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const RoadmapClient = () => {
  const roadmaps = [
    {
      title: "Android Developer Roadmap",
      description: "Start your journey to becoming an Android Developer with our Roadmap 2025!",
      pdfLink: "https://roadmap.sh/pdfs/roadmaps/android.pdf"
    },
    {
      title: "Frontend Developer Roadmap",
      description: "Start your Frontend Developer journey with the 2025 roadmap!",
      pdfLink: "https://roadmap.sh/pdfs/roadmaps/frontend.pdf"
    },
    {
      title: "Backend Developer Roadmap",
      description: "Kickstart your Backend Developer career with the 2025 roadmap!",
      pdfLink: "https://roadmap.sh/pdfs/roadmaps/backend.pdf"
    },
    {
      title: "Full Stack Developer Roadmap",
      description: "Kickstart your Full Stack Developer career with the 2025 roadmap!",
      pdfLink: "https://roadmap.sh/pdfs/roadmaps/full-stack.pdf"
    },
    {
      title: "QA Engineer Roadmap",
      description: "Kickstart your QA Engineer career with the 2025 roadmap!",
      pdfLink: "https://roadmap.sh/pdfs/roadmaps/qa.pdf"
    },
    {
      title: "DevOps Roadmapp",
      description: "Kickstart your DevOps career with the 2025 roadmap!",
      pdfLink: "https://roadmap.sh/pdfs/roadmaps/software-architect.pdf"
    },
    {
      title: "DevOps Roadmapp",
      description: "Kickstart your DevOps career with the 2025 roadmap!",
      pdfLink: "https://roadmap.sh/pdfs/roadmaps/software-architect.pdf"
    }
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Explore Roadmaps</h1>
        <p className="text-gray-600 mb-4">
          Explore the latest roadmaps to learn new skills and technologies.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap, index) => (
          <Card key={index} className="flex flex-col">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{roadmap.title}</h3>
              <p className="text-gray-600 mb-4">{roadmap.description}</p>
              <a 
                href={roadmap.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Roadmap</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default RoadmapClient;