"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import {
  Tabs,
  Tab,
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Input,
} from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/Footer";

export default function Home() {
  const [selected, setSelected] = useState("url");

  return (
    <main className="flex h-screen flex-col items-center bg-background text-foreground">
      <Header />
      <div className="mb-20 flex h-screen w-full flex-col items-center justify-center gap-20 md:px-[400px]">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-3xl tracking-wider">Hello, Welcome</h1>
          <h2 className="mb-8 text-xl text-gray-500">
            Find what people say about your app
          </h2>
          <TypeAnimation
            sequence={[
              "Find App",
              2000,
              "Analyse Reviews",
              2000,
              "Improve",
              2000,
            ]}
            wrapper="span"
            className="text-4xl text-teal-500"
            speed={50}
            repeat={Infinity}
          ></TypeAnimation>
        </div>

        <Card
          className="h-52 border border-gray-700 border-opacity-50 px-3 pb-3"
          fullWidth={true}
          isBlurred={true}
        >
          <CardHeader className="m-0 flex w-full flex-col p-0">
            <Progress
              size="sm"
              isIndeterminate
              isStriped={true}
              color="secondary"
              aria-label="Loading..."
              className="m-0 hidden w-full p-0"
            />
            <div className="w-full px-8 pt-3 font-medium">Search By</div>
          </CardHeader>
          <CardBody className="overflow-hidden p-0">
            <Tabs
              aria-label="Tabs form"
              selectedKey={selected}
              className="p-0 text-teal-500"
              variant="underlined"
              fullWidth
              size="md"
              onSelectionChange={(k) => setSelected(k.toString())}
            >
              <Tab
                className="h-full"
                key="url"
                title={
                  <div className="flex h-full items-center space-x-2">
                    <span>App URL</span>
                  </div>
                }
              >
                <form
                  className="flex h-full w-full items-center justify-center gap-2"
                  onSubmit={() => {}}
                >
                  <Input
                    type="text"
                    radius="sm"
                    placeholder="Enter App Name or URL"
                    variant="bordered"
                  />
                  <Button
                    type="submit"
                    className="rounded-lg text-teal-500"
                    variant="ghost"
                  >
                    Find App
                  </Button>
                </form>
              </Tab>
              <Tab
                className="h-full"
                key="id"
                title={
                  <div className="flex items-center space-x-2">
                    <span>App ID</span>
                  </div>
                }
              >
                <form
                  className="flex h-full w-full items-center justify-center gap-2"
                  onSubmit={() => {}}
                >
                  <Input
                    type="text"
                    radius="sm"
                    placeholder="Enter App ID"
                    variant="bordered"
                  />
                  <Button
                    type="submit"
                    className="rounded-lg text-teal-500"
                    variant="ghost"
                  >
                    Find App
                  </Button>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </main>
  );
}
