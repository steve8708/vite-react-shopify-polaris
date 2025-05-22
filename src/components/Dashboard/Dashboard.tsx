import React from "react";
import {
  Layout,
  Card,
  Button,
  Text,
  ProgressBar,
} from "@shopify/polaris";
import {
  HomeIcon,
  OrderIcon,
  ProductIcon,
  PersonIcon,
} from "@shopify/polaris-icons";
import { StatsCard } from "./components/StatsCard";
import { OrdersTable } from "./components/OrdersTable";
import "./dashboard.css";

export function Dashboard() {
  return (
    <>
      <div className="dashboard-header">
        <Text variant="headingLg" as="h1">
          Analytics
        </Text>
        <Button>May 2023</Button>
      </div>

      <Layout>
        <Layout.Section>
          <div className="stats-grid">
            <StatsCard
              title="Save Products"
              value="50.8K"
              trend={28.4}
              trendDirection="up"
              icon={ProductIcon}
            />
            <StatsCard
              title="Stock Products"
              value="23.6K"
              trend={-12.6}
              trendDirection="down"
              icon={HomeIcon}
            />
            <StatsCard
              title="Sale Products"
              value="756"
              trend={3.1}
              trendDirection="up"
              icon={OrderIcon}
            />
            <StatsCard
              title="Average Revenue"
              value="2.3K"
              trend={11.3}
              trendDirection="up"
              icon={PersonIcon}
            />
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="charts-grid">
            <Card>
              <div className="visitors-card">
                <div className="visitors-header">
                  <Text variant="headingMd" as="h2">Website Visitors</Text>
                  <Button size="slim">Export</Button>
                </div>
                <div className="visitors-content">
                  <Text variant="headingXl" as="p">
                    150k
                  </Text>
                  <div className="visitors-stats">
                    <div className="stat-item">
                      <Text as="span">Organic</Text>
                      <ProgressBar progress={30} size="small" />
                      <Text as="span">30%</Text>
                    </div>
                    <div className="stat-item">
                      <Text as="span">Social</Text>
                      <ProgressBar progress={50} size="small" />
                      <Text as="span">50%</Text>
                    </div>
                    <div className="stat-item">
                      <Text as="span">Direct</Text>
                      <ProgressBar progress={20} size="small" />
                      <Text as="span">20%</Text>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="team-progress">
                <Text variant="headingMd" as="h2">Team Progress</Text>
                <div className="team-members">
                  {[
                    {
                      name: "John Carter",
                      email: "contact@johncarter.com",
                      progress: 60,
                    },
                    {
                      name: "Sophie Moore",
                      email: "contact@sophiemoore.com",
                      progress: 33,
                    },
                    {
                      name: "Matt Cannon",
                      email: "info@mattcannon.com",
                      progress: 75,
                    },
                  ].map((member) => (
                    <div key={member.email} className="team-member">
                      <div className="member-info">
                        <Text variant="bodyMd" as="p">
                          {member.name}
                        </Text>
                        <Text variant="bodySm" as="span">
                          {member.email}
                        </Text>
                      </div>
                      <div className="member-progress">
                        <ProgressBar
                          progress={member.progress}
                          size="small"
                        />
                        <Text as="span">{member.progress}%</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Layout.Section>

        <Layout.Section>
          <OrdersTable />
        </Layout.Section>
      </Layout>
    </>
  );
}
