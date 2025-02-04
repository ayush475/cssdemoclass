"use client"

import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowDown, Move } from "lucide-react"
import type { CSSProperties } from "react"

// Sample image URLs (replace with your own or use dynamic data)
const sampleImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
]

export default function FlexboxDemo() {
  const [justifyContent, setJustifyContent] = useState<CSSProperties["justifyContent"]>("flex-start")
  const [alignItems, setAlignItems] = useState<CSSProperties["alignItems"]>("stretch")
  const [flexDirection, setFlexDirection] = useState<CSSProperties["flexDirection"]>("row")
  const [flexWrap, setFlexWrap] = useState<CSSProperties["flexWrap"]>("nowrap")
  const [gap, setGap] = useState(0)
  const [flexGrow, setFlexGrow] = useState(0)
  const [alignSelf, setAlignSelf] = useState<CSSProperties["alignSelf"]>("auto")
  const [order, setOrder] = useState(0)
  const [imageSize, setImageSize] = useState(150)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mt-4 mb-2">Flexbox</h2>
      <p className="mb-4">
        Flexbox is a powerful CSS layout model that allows you to design complex layout structures with a more efficient
        and predictable way than traditional models. It&apos;s especially useful for distributing space and aligning content
        in complex applications and web pages.
      </p>

      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">Basic Properties</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Properties</TabsTrigger>
          <TabsTrigger value="image-gallery">Image Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="justify-content" className="text-lg font-semibold">
                Justify Content
              </Label>
              <p className="mb-2">Controls alignment along the main axis.</p>
              <Select
                onValueChange={(value) => setJustifyContent(value as CSSProperties["justifyContent"])}
                value={justifyContent}
              >
                <SelectTrigger id="justify-content">
                  <SelectValue placeholder="Select justify-content" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">flex-start</SelectItem>
                  <SelectItem value="flex-end">flex-end</SelectItem>
                  <SelectItem value="center">center</SelectItem>
                  <SelectItem value="space-between">space-between</SelectItem>
                  <SelectItem value="space-around">space-around</SelectItem>
                  <SelectItem value="space-evenly">space-evenly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="align-items" className="text-lg font-semibold">
                Align Items
              </Label>
              <p className="mb-2">Controls alignment along the cross axis.</p>
              <Select onValueChange={(value) => setAlignItems(value as CSSProperties["alignItems"])} value={alignItems}>
                <SelectTrigger id="align-items">
                  <SelectValue placeholder="Select align-items" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">flex-start</SelectItem>
                  <SelectItem value="flex-end">flex-end</SelectItem>
                  <SelectItem value="center">center</SelectItem>
                  <SelectItem value="stretch">stretch</SelectItem>
                  <SelectItem value="baseline">baseline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="flex-direction" className="text-lg font-semibold">
                Flex Direction
              </Label>
              <p className="mb-2">Defines the main axis of the container.</p>
              <Select
                onValueChange={(value) => setFlexDirection(value as CSSProperties["flexDirection"])}
                value={flexDirection}
              >
                <SelectTrigger id="flex-direction">
                  <SelectValue placeholder="Select flex-direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="row">row</SelectItem>
                  <SelectItem value="row-reverse">row-reverse</SelectItem>
                  <SelectItem value="column">column</SelectItem>
                  <SelectItem value="column-reverse">column-reverse</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2">Result:</p>
            <div className="relative bg-slate-100 p-4 min-h-[200px] rounded-lg">
              <div
                className="flex p-4 min-h-[200px] rounded-lg border-2 border-dashed border-blue-500"
                style={
                  {
                    justifyContent,
                    alignItems,
                    flexDirection,
                  } as CSSProperties
                }
              >
                <div className="bg-red-500 text-white p-4 m-2 rounded shadow-md">1</div>
                <div className="bg-green-500 text-white p-4 m-2 rounded shadow-md">2</div>
                <div className="bg-blue-500 text-white p-4 m-2 rounded shadow-md">3</div>
                <div className="bg-yellow-500 text-black p-4 m-2 rounded shadow-md">4</div>
                <div className="bg-purple-500 text-white p-4 m-2 rounded shadow-md">5</div>
              </div>
              {flexDirection?.includes("row") ? (
                <ArrowRight className="absolute top-1/2 left-2 transform -translate-y-1/2 text-blue-500" size={24} />
              ) : (
                <ArrowDown className="absolute top-2 left-1/2 transform -translate-x-1/2 text-blue-500" size={24} />
              )}
              <p className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-blue-500">
                Main Axis
              </p>
              <p className="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-green-500">
                Cross Axis
              </p>
            </div>
            <p className="mt-4">
              <strong>Main Axis:</strong> The primary axis along which flex items are laid out. It&apos;s horizontal for
              &apos;row&apos; and vertical for &apos;column&apos;. <strong>justify-content</strong> aligns items along this axis.
            </p>
            <p className="mt-2">
              <strong>Cross Axis:</strong> The axis perpendicular to the main axis. <strong>align-items</strong> aligns
              items along this axis.
            </p>
            <p className="mt-2">
              Experiment with different combinations to see how these basic Flexbox properties interact. Notice how
              changing the flex-direction affects which axis justify-content and align-items work on.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="flex-wrap" className="text-lg font-semibold">
                Flex Wrap
              </Label>
              <p className="mb-2">Controls whether items wrap to new lines.</p>
              <Select onValueChange={(value) => setFlexWrap(value as CSSProperties["flexWrap"])} value={flexWrap}>
                <SelectTrigger id="flex-wrap">
                  <SelectValue placeholder="Select flex-wrap" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nowrap">nowrap</SelectItem>
                  <SelectItem value="wrap">wrap</SelectItem>
                  <SelectItem value="wrap-reverse">wrap-reverse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="gap" className="text-lg font-semibold">
                Gap
              </Label>
              <p className="mb-2">Sets the gap between flex items.</p>
              <Slider id="gap" min={0} max={20} step={1} value={[gap]} onValueChange={(value) => setGap(value[0])} />
              <p className="mt-2">Current gap: {gap}px</p>
            </div>
            <div>
              <Label htmlFor="flex-grow" className="text-lg font-semibold">
                Flex Grow (Item 2)
              </Label>
              <p className="mb-2">Controls how much item 2 grows relative to others.</p>
              <Slider
                id="flex-grow"
                min={0}
                max={3}
                step={1}
                value={[flexGrow]}
                onValueChange={(value) => setFlexGrow(value[0])}
              />
              <p className="mt-2">Current flex-grow: {flexGrow}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="align-self" className="text-lg font-semibold">
                Align Self (Item 3)
              </Label>
              <p className="mb-2">Controls alignment of item 3 along the cross axis.</p>
              <Select onValueChange={(value) => setAlignSelf(value as CSSProperties["alignSelf"])} value={alignSelf}>
                <SelectTrigger id="align-self">
                  <SelectValue placeholder="Select align-self" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">auto</SelectItem>
                  <SelectItem value="flex-start">flex-start</SelectItem>
                  <SelectItem value="flex-end">flex-end</SelectItem>
                  <SelectItem value="center">center</SelectItem>
                  <SelectItem value="stretch">stretch</SelectItem>
                  <SelectItem value="baseline">baseline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="order" className="text-lg font-semibold">
                Order (Item 4)
              </Label>
              <p className="mb-2">Controls the order of item 4 in the flex container.</p>
              <Slider
                id="order"
                min={-1}
                max={5}
                step={1}
                value={[order]}
                onValueChange={(value) => setOrder(value[0])}
              />
              <p className="mt-2">Current order: {order}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2">Result:</p>
            <div
              className="bg-slate-100 p-4 min-h-[300px] rounded-lg"
              style={
                {
                  display: "flex",
                  justifyContent,
                  alignItems,
                  flexDirection,
                  flexWrap,
                  gap: `${gap}px`,
                } as CSSProperties
              }
            >
              <div className="bg-red-500 text-white p-4 m-2 rounded shadow-md">1</div>
              <div className="bg-green-500 text-white p-4 m-2 rounded shadow-md" style={{ flexGrow }}>
                2 (flex-grow: {flexGrow})
              </div>
              <div className="bg-blue-500 text-white p-4 m-2 rounded shadow-md" style={{ alignSelf }}>
                3 (align-self: {alignSelf})
              </div>
              <div className="bg-yellow-500 text-black p-4 m-2 rounded shadow-md" style={{ order }}>
                4 (order: {order})
              </div>
              <div className="bg-purple-500 text-white p-4 m-2 rounded shadow-md">5</div>
              <div className="bg-pink-500 text-white p-4 m-2 rounded shadow-md">6</div>
              <div className="bg-indigo-500 text-white p-4 m-2 rounded shadow-md">7</div>
              <div className="bg-orange-500 text-white p-4 m-2 rounded shadow-md">8</div>
            </div>
            <p className="mt-4">
              <strong>flex-wrap:</strong> Controls whether items are forced onto one line or can wrap onto multiple
              lines. &apos;nowrap&apos; (default) keeps all items on one line, &apos;wrap&apos; allows items to flow onto multiple lines,
              and &apos;wrap-reverse&apos; wraps items onto multiple lines in reverse order.
            </p>
            <p className="mt-2">
              <strong>flex-grow:</strong> Defines the ability for a flex item to grow if necessary. It accepts a
              unitless value that serves as a proportion. Item 2 demonstrates this property.
            </p>
            <p className="mt-2">
              <strong>order:</strong> Controls the order in which flex items appear in the flex container. The default
              order is 0, and higher numbers appear later in the order. Negative numbers are allowed. Item 4
              demonstrates this property.
            </p>
            <p className="mt-2">
              This advanced example demonstrates flex-wrap, gap, and individual item properties like flex-grow,
              align-self, and order. Notice how these properties allow for fine-grained control over the layout and
              individual items.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="image-gallery">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="gallery-direction" className="text-lg font-semibold">
                Gallery Direction
              </Label>
              <p className="mb-2">Changes the layout direction of the gallery.</p>
              <Select
                onValueChange={(value) => setFlexDirection(value as CSSProperties["flexDirection"])}
                value={flexDirection}
              >
                <SelectTrigger id="gallery-direction">
                  <SelectValue placeholder="Select direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="row">row</SelectItem>
                  <SelectItem value="column">column</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="gallery-wrap" className="text-lg font-semibold">
                Gallery Wrap
              </Label>
              <p className="mb-2">Controls whether images wrap to new lines/columns.</p>
              <Select onValueChange={(value) => setFlexWrap(value as CSSProperties["flexWrap"])} value={flexWrap}>
                <SelectTrigger id="gallery-wrap">
                  <SelectValue placeholder="Select wrap" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nowrap">nowrap</SelectItem>
                  <SelectItem value="wrap">wrap</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="gallery-gap" className="text-lg font-semibold">
                Gallery Gap
              </Label>
              <p className="mb-2">Sets the gap between images.</p>
              <Slider
                id="gallery-gap"
                min={0}
                max={20}
                step={1}
                value={[gap]}
                onValueChange={(value) => setGap(value[0])}
              />
              <p className="mt-2">Current gap: {gap}px</p>
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="image-size" className="text-lg font-semibold">
              Image Size
            </Label>
            <p className="mb-2">Adjust the size of the images.</p>
            <Slider
              id="image-size"
              min={50}
              max={300}
              step={10}
              value={[imageSize]}
              onValueChange={(value) => setImageSize(value[0])}
            />
            <p className="mt-2">Current image size: {imageSize}px</p>
          </div>

          <div className="mt-6">
            <p className="mb-2">Image Gallery:</p>
            <div
              className="bg-slate-100 p-4 rounded-lg"
              style={
                {
                  display: "flex",
                  flexDirection,
                  flexWrap,
                  gap: `${gap}px`,
                  justifyContent: "center",
                } as CSSProperties
              }
            >
              {sampleImages.map((src, index) => (
                <div
                  key={index}
                  style={{
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    flexShrink: 0,
                  }}
                  className="relative group"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Gallery Image ${index + 1}`}
                    width={imageSize}
                    height={imageSize}
                    className="rounded object-cover shadow-md transition-transform group-hover:scale-105"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Move className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4">
              This image gallery demonstrates how Flexbox can be used to create responsive image layouts. Try changing
              the direction, wrap, gap, and image size to see how it affects the gallery layout.
            </p>
            <p className="mt-2">
              <strong>flex-direction:</strong> Determines the main axis of the layout. &apos;row&apos; places images horizontally,
              while &apos;column&apos; stacks them vertically.
            </p>
            <p className="mt-2">
              <strong>flex-wrap:</strong> Controls whether images are forced onto one line/column or can wrap. &apos;nowrap&apos;
              keeps all images in a single line/column, potentially causing overflow, while &apos;wrap&apos; allows images to flow
              onto multiple lines/columns as needed.
            </p>
            <p className="mt-2">
              This type of flexible layout is commonly used in real-world applications for image galleries, product
              displays, and more. It adapts well to different screen sizes and content amounts.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Key Flexbox Concepts:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Flex Container:</strong> The parent element that has <code>display: flex</code> applied to it.
          </li>
          <li>
            <strong>Flex Items:</strong> The direct children of a flex container.
          </li>
          <li>
            <strong>Main Axis:</strong> The primary axis along which flex items are laid out. It&apos;s horizontal for{" "}
            <code>row</code> and vertical for <code>column</code>.
          </li>
          <li>
            <strong>Cross Axis:</strong> The axis perpendicular to the main axis.
          </li>
          <li>
            <strong>justify-content:</strong> Aligns flex items along the main axis.
          </li>
          <li>
            <strong>align-items:</strong> Aligns flex items along the cross axis.
          </li>
          <li>
            <strong>flex-direction:</strong> Defines the direction of the main axis (row, column, row-reverse,
            column-reverse).
          </li>
          <li>
            <strong>flex-wrap:</strong> Controls whether flex items are forced onto one line or can wrap onto multiple
            lines.
          </li>
          <li>
            <strong>gap:</strong> Sets the spacing between flex items.
          </li>
          <li>
            <strong>flex-grow:</strong> Defines the ability of a flex item to grow if necessary. It accepts a unitless
            value that serves as a proportion.
          </li>
          <li>
            <strong>flex-shrink:</strong> Defines the ability of a flex item to shrink if necessary.
          </li>
          <li>
            <strong>flex-basis:</strong> Defines the default size of an element before the remaining space is
            distributed.
          </li>
          <li>
            <strong>align-self:</strong> Allows the default alignment to be overridden for individual flex items.
          </li>
          <li>
            <strong>order:</strong> Controls the order in which flex items appear in the flex container.
          </li>
        </ul>
      </div>

      <p className="mt-4">
        Flexbox is a powerful tool for creating responsive and flexible layouts. By understanding and experimenting with
        these properties, you can create complex layouts that adapt to different screen sizes and content amounts. The
        examples above demonstrate some of the key features of Flexbox, but there&apos;s much more to explore. Practice
        combining these properties in different ways to master Flexbox layouts.
      </p>
    </div>
  )
}

