import React from "react";
import { Card, Text, Icon } from "@shopify/polaris";
import { CaretUpIcon, CaretDownIcon } from "@shopify/polaris-icons";
import type { IconSource } from "@shopify/polaris";

interface StatsCardProps {
  title: string;
  value: string;
  trend: number;
  trendDirection: "up" | "down";
  icon: IconSource;
}

export function StatsCard({
  title,
  value,
  trend,
  trendDirection,
  icon,
}: StatsCardProps) {
  return (
    <Card>
      <div className="stats-card">
        <div className="stats-header">
          <Icon source={icon} />
          <Text variant="bodySm" as="span">{title}</Text>
        </div>
        <div className="stats-content">
          <Text variant="headingLg" as="p">{value}</Text>
          <div className={`trend-badge ${trendDirection}`}>
            <Icon
              source={trendDirection === "up" ? CaretUpIcon : CaretDownIcon}
            />
            <Text variant="bodySm" as="span">{Math.abs(trend)}%</Text>
          </div>
        </div>
      </div>
    </Card>
  );
}
