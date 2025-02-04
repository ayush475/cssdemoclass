"use client"

import { useState } from "react"
import Image from "next/image"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function PercentageDemo() {
  const [containerWidth, setContainerWidth] = useState(100)
  const [childWidth, setChildWidth] = useState(50)
  const [fontSize, setFontSize] = useState(100)
  const [imageSize, setImageSize] = useState(50)
  const [marginPercentage, setMarginPercentage] = useState(5)
  const [heightPercentage, setHeightPercentage] = useState(50)
  const [viewportUnits, setViewportUnits] = useState(50)

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mt-4 mb-2">CSS Percentage Units Demo</h2>
      <p className="mb-4 text-base sm:text-lg">
        Percentage units in CSS are relative to some other value. They can be used for various properties including
        widths, heights, padding, margins, font sizes, and more. This interactive demo explores different applications
        of percentage units and compares them with viewport units.
      </p>

      <Tabs defaultValue="width" className="space-y-4">
        <TabsList className="flex flex-wrap justify-start gap-2">
          <TabsTrigger value="width" className="flex-grow sm:flex-grow-0">
            Width
          </TabsTrigger>
          <TabsTrigger value="font-size" className="flex-grow sm:flex-grow-0">
            Font Size
          </TabsTrigger>
          <TabsTrigger value="image" className="flex-grow sm:flex-grow-0">
            Image Sizing
          </TabsTrigger>
          <TabsTrigger value="layout" className="flex-grow sm:flex-grow-0">
            Layout
          </TabsTrigger>
          <TabsTrigger value="viewport" className="flex-grow sm:flex-grow-0">
            Viewport Units
          </TabsTrigger>
        </TabsList>

        <TabsContent value="width">
          <Card className="p-4">
            <CardContent className="space-y-4 pt-0">
              <h3 className="text-xl font-semibold mb-2">Width Percentages</h3>
              <p className="mb-2 text-base sm:text-lg">
                These sliders adjust the widths of parent and child elements as percentages.
              </p>
              <Label htmlFor="container-width" className="text-lg">
                Container Width: {containerWidth}%
              </Label>
              <Slider
                id="container-width"
                min={50}
                max={100}
                step={1}
                value={[containerWidth]}
                onValueChange={(value) => setContainerWidth(value[0])}
                className="max-w-md"
              />
              <Label htmlFor="child-width" className="text-lg mt-4 block">
                Child Width: {childWidth}%
              </Label>
              <Slider
                id="child-width"
                min={10}
                max={100}
                step={1}
                value={[childWidth]}
                onValueChange={(value) => setChildWidth(value[0])}
                className="max-w-md"
              />
              <div className="mt-4">
                <div className="bg-secondary p-4 rounded-lg" style={{ width: `${containerWidth}%` }}>
                  Container ({containerWidth}%)
                  <div
                    className="bg-primary text-primary-foreground p-2 mt-2 rounded"
                    style={{ width: `${childWidth}%` }}
                  >
                    Child ({childWidth}%)
                  </div>
                </div>
              </div>
              <p className="mt-4 text-base sm:text-lg">
                Notice how the child&apos;s actual width is a percentage of it&apos;s parent&apos;s width, not the full page width. This
                nesting behavior is crucial for creating responsive layouts.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="font-size">
          <Card className="p-4">
            <CardContent className="space-y-4 pt-0">
              <h3 className="text-xl font-semibold mb-2">Font Size Percentages</h3>
              <p className="mb-2 text-base sm:text-lg">
                This slider adjusts the font size as a percentage of the parent&apos;s font size.
              </p>
              <Label htmlFor="font-size" className="text-lg">
                Font Size: {fontSize}%
              </Label>
              <Slider
                id="font-size"
                min={50}
                max={200}
                step={10}
                value={[fontSize]}
                onValueChange={(value) => setFontSize(value[0])}
                className="max-w-md"
              />
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p>Parent text (100%)</p>
                <p style={{ fontSize: `${fontSize}%` }}>This text is {fontSize}% of its parent&apos;s font size</p>
                <div style={{ fontSize: `${fontSize}%` }}>
                  <p>Nested text</p>
                  <p style={{ fontSize: `${fontSize}%` }}>
                    This text is {fontSize}% of its parent, which is already {fontSize}% of the original
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base sm:text-lg">
                Percentage-based font sizes are relative to the parent element&apos;s font size. This can lead to compounding
                effects when nesting elements with percentage-based font sizes, as demonstrated above.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="image">
          <Card className="p-4">
            <CardContent className="space-y-4 pt-0">
              <h3 className="text-xl font-semibold mb-2">Image Size Percentages</h3>
              <p className="mb-2 text-base sm:text-lg">
                This slider adjusts the size of an image as a percentage of its container.
              </p>
              <Label htmlFor="image-size" className="text-lg">
                Image Size: {imageSize}%
              </Label>
              <Slider
                id="image-size"
                min={10}
                max={100}
                step={5}
                value={[imageSize]}
                onValueChange={(value) => setImageSize(value[0])}
                className="max-w-md"
              />
              <div className="mt-4 p-4 bg-secondary rounded-lg" style={{ height: "auto", minHeight: "200px" }}>
                <Image
                  src="/placeholder.svg"
                  alt="Landscape"
                  width={300}
                  height={200}
                  style={{ width: `${imageSize}%`, height: "auto", maxWidth: "100%", objectFit: "contain" }}
                />
              </div>
              <p className="mt-4 text-base sm:text-lg">
                When using percentage-based sizing for images, be mindful of aspect ratio. Here, we&apos;re setting the width
                as a percentage and allowing the height to adjust automatically to maintain the aspect ratio.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout">
          <Card className="p-4">
            <CardContent className="space-y-4 pt-0">
              <h3 className="text-xl font-semibold mb-2">Layout Percentages</h3>
              <p className="mb-2 text-base sm:text-lg">
                These sliders demonstrate how percentages can be used for various layout properties.
              </p>
              <Label htmlFor="margin-percentage" className="text-lg">
                Margin Percentage: {marginPercentage}%
              </Label>
              <Slider
                id="margin-percentage"
                min={0}
                max={25}
                step={1}
                value={[marginPercentage]}
                onValueChange={(value) => setMarginPercentage(value[0])}
                className="max-w-md"
              />
              <Label htmlFor="height-percentage" className="text-lg mt-4 block">
                Height Percentage: {heightPercentage}%
              </Label>
              <Slider
                id="height-percentage"
                min={10}
                max={100}
                step={5}
                value={[heightPercentage]}
                onValueChange={(value) => setHeightPercentage(value[0])}
                className="max-w-md"
              />
              <div className="mt-4 bg-secondary p-4 rounded-lg" style={{ height: "300px" }}>
                <div
                  className="bg-primary text-primary-foreground p-2 rounded"
                  style={{
                    margin: `${marginPercentage}%`,
                    height: `${heightPercentage}%`,
                  }}
                >
                  This div has {marginPercentage}% margin and {heightPercentage}% height
                </div>
              </div>
              <p className="mt-4 text-base sm:text-lg">
                Percentage-based margins are calculated based on the width of the containing block. Height percentages
                require the parent to have a defined height to work properly. In this case, the parent has a fixed
                height of 300px.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="viewport">
          <Card className="p-4">
            <CardContent className="space-y-4 pt-0">
              <h3 className="text-xl font-semibold mb-2">Viewport Units vs Percentages</h3>
              <p className="mb-2 text-base sm:text-lg">
                This slider demonstrates the difference between viewport units (vw/vh) and percentage units.
              </p>
              <Label htmlFor="viewport-units" className="text-lg">
                Size: {viewportUnits}%/vw
              </Label>
              <Slider
                id="viewport-units"
                min={10}
                max={100}
                step={5}
                value={[viewportUnits]}
                onValueChange={(value) => setViewportUnits(value[0])}
                className="max-w-md"
              />
              <div className="mt-4 space-y-4">
                <div className="bg-secondary p-4 rounded-lg overflow-hidden">
                  <div
                    className="bg-primary text-primary-foreground p-2 rounded whitespace-nowrap"
                    style={{ width: `${viewportUnits}%` }}
                  >
                    This div is {viewportUnits}% wide
                  </div>
                </div>
                <div className="bg-secondary p-4 rounded-lg overflow-hidden">
                  <div
                    className="bg-primary text-primary-foreground p-2 rounded whitespace-nowrap"
                    style={{ width: `${viewportUnits}vw` }}
                  >
                    This div is {viewportUnits}vw wide
                  </div>
                </div>
              </div>
              <p className="mt-4 text-base sm:text-lg">
                Notice how the percentage width is relative to the container, while the vw unit is relative to the
                viewport width. This difference becomes more apparent when the container is not full-width.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8 p-4">
        <CardContent className="pt-0">
          <h3 className="text-xl font-semibold mb-2">Key Points About Percentage Units:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Percentages are always relative to another value, often from the parent element.</li>
            <li>For widths, the percentage is relative to the parent&apos;s width.</li>
            <li>For heights, the parent must have a defined height for child percentage heights to work.</li>
            <li>
              Font-size percentages are relative to the parent&apos;s font size, which can lead to compounding effects.
            </li>
            <li>
              Margin and padding percentages are calculated based on the parent&apos;s width, even for top and bottom
              margins/paddings.
            </li>
            <li>Using percentages can help create responsive designs that adapt to different screen sizes.</li>
            <li>Be cautious when nesting elements with percentage-based sizing to avoid unintended results.</li>
            <li>
              Viewport units (vw/vh) are similar to percentages but are always relative to the viewport size, not the
              parent element.
            </li>
          </ul>
        </CardContent>
      </Card>

      <p className="mt-4 text-base sm:text-lg">
        Percentage units are powerful for creating flexible and responsive layouts. They allow elements to size
        themselves relative to their parents, which can be particularly useful for adapting to different screen sizes.
        However, it&apos;s important to understand how they behave in different contexts to use them effectively. Combining
        percentage units with other CSS units like viewport units (vw/vh) and fixed units (px) can lead to even more
        flexible and robust layouts.
      </p>
    </div>
  )
}

