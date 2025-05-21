import React from "react";
import {
  Card,
  DataTable,
  Badge,
  Button,
  Text,
  ButtonGroup,
} from "@shopify/polaris";

export function OrdersTable() {
  const orders = [
    {
      id: "#1532",
      customer: { name: "John Carter", email: "hello@johncarter.com" },
      date: "Jan 30, 2024",
      status: "Delivered",
      country: "United States",
      total: "$ 1,099.24",
    },
    {
      id: "#1531",
      customer: { name: "Sophie Moore", email: "contact@sophiemoore.com" },
      date: "Jan 27, 2024",
      status: "Canceled",
      country: "United Kingdom",
      total: "$ 5,870.32",
    },
    // Add more orders as needed
  ];

  const rows = orders.map((order) => [
    order.id,
    <div key={order.id} className="customer-cell">
      <Text as="p" variant="bodyMd">{order.customer.name}</Text>
      <Text as="p" variant="bodySm" tone="subdued">
        {order.customer.email}
      </Text>
    </div>,
    order.date,
    <Badge key={order.id} tone={getStatusColor(order.status)}>
      {order.status}
    </Badge>,
    order.country,
    <Text as="p" key={order.id} alignment="end">
      {order.total}
    </Text>,
  ]);

  return (
    <Card>
      <div className="orders-header">
        <Text as="h2" variant="headingMd">Orders Status</Text>
        <ButtonGroup>
          <Button>Jan 2024</Button>
          <Button variant="primary">Create order</Button>
        </ButtonGroup>
      </div>
      <DataTable
        columnContentTypes={["text", "text", "text", "text", "text", "numeric"]}
        headings={["Order", "Customer", "Date", "Status", "Country", "Total"]}
        rows={rows}
      />
    </Card>
  );
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "delivered":
      return "success";
    case "pending":
      return "warning";
    case "canceled":
      return "critical";
    default:
      return "new";
  }
}
