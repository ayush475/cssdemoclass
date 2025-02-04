"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RemEmDemo from "./components/rem-em-demo"
import PercentageDemo from "./components/percentage-demo"
import FlexboxDemo from "./components/flexbox-demo"
import Footer from "./components/footer"

export default function CSSUnitsDemo() {
  const [rootFontSize, setRootFontSize] = useState(16)

  return (
    <div className="container mx-auto p-4" style={{ fontSize: `${rootFontSize}px` }}>
      <h1 className="text-3xl font-bold mb-2">Interactive CSS Units & Flexbox Demo</h1>
      <div className="text-lg mb-4">
        <p>NCMT College</p>
        <p>Instructor: Ayush Acharya</p>
      </div>

      <p className="mb-6 text-lg">
        This interactive demo will help you understand how different CSS units (rem, em, %) and Flexbox work. Experiment
        with the controls to see how they affect the layout and sizing of elements in various scenarios.
      </p>

      <div className="mb-6">
        <Label htmlFor="root-font-size" className="text-lg font-semibold">
          Root Font Size: {rootFontSize}px
        </Label>
        <p className="mb-2">
          Adjust this to see how it affects rem units and indirectly influences em units across all examples.
        </p>
        <Slider
          id="root-font-size"
          min={12}
          max={24}
          step={1}
          value={[rootFontSize]}
          onValueChange={(value) => setRootFontSize(value[0])}
          className="w-full"
        />
      </div>

      <Tabs defaultValue="rem-em">
        <TabsList>
          <TabsTrigger value="rem-em">REM & EM</TabsTrigger>
          <TabsTrigger value="percentage">Percentage</TabsTrigger>
          <TabsTrigger value="flexbox">Flexbox</TabsTrigger>
        </TabsList>
        <TabsContent value="rem-em">
          <RemEmDemo rootFontSize={rootFontSize} />
        </TabsContent>
        <TabsContent value="percentage">
          <PercentageDemo />
        </TabsContent>
        <TabsContent value="flexbox">
          <FlexboxDemo />
        </TabsContent>
      </Tabs>
      <Footer />
    </div>
  )
}

