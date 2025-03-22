"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Container } from "./ui/container";
import { useState } from "react";

export function TestingScheduler() {
  const [date, setDate] = useState<string>("2023-03-03");
  const [highRiskOnly, setHighRiskOnly] = useState<boolean>(false);
  const [probationersPerDay, setProbationersPerDay] = useState<number>(10);
  const [selectedTime, setSelectedTime] = useState<string>("Morning (9-12)");
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [customCount, setCustomCount] = useState<string>("");

  return (
    <section className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Default Random Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Default Random Selection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(210,100%,97%)] dark:bg-[hsl(210,100%,20%/0.2)]">
                    <h3 className="text-[hsl(var(--primary))] font-medium">Daily Tests</h3>
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold mb-2">{probationersPerDay}</div>
                    <div className="text-[hsl(var(--foreground))]/70 text-sm text-center">
                      probationers per day
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="50" 
                      value={probationersPerDay} 
                      onChange={(e) => setProbationersPerDay(parseInt(e.target.value))}
                      className="w-full mt-4"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(140,100%,97%)] dark:bg-[hsl(140,100%,20%/0.2)]">
                    <h3 className="text-[hsl(140,100%,35%)] dark:text-[hsl(140,70%,50%)] font-medium">Schedule Date</h3>
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="p-2 border border-[hsl(var(--border))] rounded-md w-full text-center bg-[hsl(var(--background))]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(270,100%,97%)] dark:bg-[hsl(270,100%,20%/0.2)]">
                    <h3 className="text-[hsl(270,100%,40%)] dark:text-[hsl(270,70%,70%)] font-medium">High Risk Only</h3>
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center">
                    <div className="inline-flex items-center">
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={highRiskOnly}
                          onChange={() => setHighRiskOnly(!highRiskOnly)}
                        />
                        <div className="w-11 h-6 bg-[hsl(var(--muted))] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[hsl(270,100%,40%)]"></div>
                        <span className="ml-3 text-[hsl(var(--foreground))]">Yes</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(160,100%,97%)] dark:bg-[hsl(160,100%,20%/0.2)]">
                    <h3 className="text-[hsl(160,100%,35%)] dark:text-[hsl(160,70%,50%)] font-medium">Generate</h3>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <Button className="w-full bg-[hsl(160,80%,40%)] hover:bg-[hsl(160,80%,35%)] text-white">
                      <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 3.5a1.5 1.5 0 013 0V9h5.5a1.5 1.5 0 010 3H13v5.5a1.5 1.5 0 01-3 0V12H4.5a1.5 1.5 0 010-3H10V3.5z" />
                        </svg>
                      </span>
                      Generate & Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Custom Schedule */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Custom Schedule</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(40,100%,97%)] dark:bg-[hsl(40,100%,20%/0.2)]">
                    <h3 className="text-[hsl(40,100%,40%)] dark:text-[hsl(40,100%,60%)] font-medium">Custom Count</h3>
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center">
                    <input
                      type="text"
                      placeholder="Number of probationers"
                      value={customCount}
                      onChange={(e) => setCustomCount(e.target.value)}
                      className="w-full p-2 border border-[hsl(var(--border))] rounded-md text-center bg-[hsl(var(--background))]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(220,100%,97%)] dark:bg-[hsl(220,100%,20%/0.2)]">
                    <h3 className="text-[hsl(220,100%,40%)] dark:text-[hsl(220,70%,70%)] font-medium">Schedule Time</h3>
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center">
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--background))]"
                    >
                      <option value="Morning (9-12)">Morning (9-12)</option>
                      <option value="Afternoon (12-5)">Afternoon (12-5)</option>
                      <option value="Evening (5-8)">Evening (5-8)</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(0,100%,97%)] dark:bg-[hsl(0,100%,20%/0.2)]">
                    <h3 className="text-[hsl(0,100%,40%)] dark:text-[hsl(0,70%,70%)] font-medium">Offense Type</h3>
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full p-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--background))]"
                    >
                      <option value="All Types">All Types</option>
                      <option value="Drug-related">Drug-related</option>
                      <option value="DUI/DWI">DUI/DWI</option>
                      <option value="Violent">Violent</option>
                      <option value="Property">Property</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-[hsl(var(--border))] shadow-sm">
                <CardContent className="p-0">
                  <div className="p-4 bg-[hsl(220,100%,97%)] dark:bg-[hsl(220,100%,20%/0.2)]">
                    <h3 className="text-[hsl(220,100%,40%)] dark:text-[hsl(220,70%,70%)] font-medium">Generate</h3>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <Button className="w-full bg-[hsl(220,100%,50%)] hover:bg-[hsl(220,100%,45%)] text-white">
                      <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Generate & Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 