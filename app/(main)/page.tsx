'use client';

import { Card, CardHeader, Progress } from '@nextui-org/react';
import { TypeAnimation } from 'react-type-animation';
import CardFormBody from '@/components/CardFormBody';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center bg-background text-foreground">
      <div className="mb-20 flex h-screen w-full flex-col items-center justify-center gap-20 md:px-[400px]">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-3xl tracking-wider">Hello, Welcome</h1>
          <h2 className="mb-8 text-xl text-gray-500">
            Find what people say about your app
          </h2>
          <TypeAnimation
            sequence={[
              'Find App',
              2000,
              'Analyse Reviews',
              2000,
              'Improve',
              2000,
            ]}
            wrapper="span"
            className="text-4xl text-teal-500"
            speed={50}
            repeat={Infinity}
          ></TypeAnimation>
        </div>

        <Card
          className="h-40 border border-gray-700 border-opacity-80 px-3 pb-3"
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
            <div className="w-full pt-4 font-medium">
              Enter the app id to find report
            </div>
          </CardHeader>
          <CardFormBody />
        </Card>
      </div>
    </main>
  );
}
