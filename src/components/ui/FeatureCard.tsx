import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  points: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, points }) => {
  return (
    <Card className="flex flex-col bg-muted">
      <CardHeader>
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 font-light">
          {points.map((point, pIndex) => (
            <li key={pIndex} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
