"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function RemEmDemo({ rootFontSize }: { rootFontSize: number }) {
  const [remValue, setRemValue] = useState(1)
  const [emValue, setEmValue] = useState(1)
  const [nestedEmValue, setNestedEmValue] = useState(1)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mt-4 mb-2">REM and EM Units</h2>
      <p className="mb-4">
        REM (Root EM) and EM are relative units in CSS. REM is always relative to the root element&apos;s font size, while EM
        is relative to the font size of its closest parent or the element itself.
      </p>

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">REM (Root EM) Examples</h3>
        <p className="mb-4">
          1rem is always equal to the font size of the root element (usually the {"<html>"} tag). In this demo, you can
          change the root font size above, and see how it affects the REM calculations.
        </p>
        <Label htmlFor="rem-slider" className="text-lg">
          REM Value: {remValue}rem
        </Label>
        <Slider
          id="rem-slider"
          min={0.5}
          max={3}
          step={0.1}
          value={[remValue]}
          onValueChange={(value) => setRemValue(value[0])}
        />
        <div className="space-y-4 mt-4">
          <div className="p-4 bg-primary text-primary-foreground rounded" style={{ fontSize: `${remValue}rem` }}>
            This text is {remValue}rem = {remValue * rootFontSize}px
          </div>
          <div className="p-4 bg-secondary text-secondary-foreground rounded" style={{ padding: `${remValue}rem` }}>
            This box has {remValue}rem padding = {remValue * rootFontSize}px
          </div>
          <div
            className="p-4 bg-accent text-accent-foreground rounded"
            style={{ width: `${remValue * 10}rem`, height: `${remValue * 5}rem` }}
          >
            This box is {remValue * 10}rem wide and {remValue * 5}rem tall
          </div>
        </div>
        <p className="mt-4">
          Notice how changing the root font size affects all these elements consistently, as they&apos;re all relative to the
          same root font size.
        </p>
      </div>

      <div className="bg-muted p-4 rounded-lg mt-6">
        <h3 className="text-xl font-semibold mb-2">EM Examples</h3>
        <p className="mb-4">
          1em is equal to the font size of the parent element. This can create a compounding effect when em is used for
          font sizes in nested elements.
        </p>
        <Label htmlFor="em-slider" className="text-lg">
          Parent EM Value: {emValue}em
        </Label>
        <Slider
          id="em-slider"
          min={0.5}
          max={3}
          step={0.1}
          value={[emValue]}
          onValueChange={(value) => setEmValue(value[0])}
        />
        <Label htmlFor="nested-em-slider" className="text-lg mt-4 block">
          Nested EM Value: {nestedEmValue}em
        </Label>
        <Slider
          id="nested-em-slider"
          min={0.5}
          max={3}
          step={0.1}
          value={[nestedEmValue]}
          onValueChange={(value) => setNestedEmValue(value[0])}
        />
        <div className="space-y-4 mt-4">
          <div className="p-4 bg-secondary text-secondary-foreground rounded" style={{ fontSize: `${emValue}em` }}>
            Parent: {emValue}em ({emValue * rootFontSize}px)
            <div style={{ fontSize: `${nestedEmValue}em` }}>
              Child: {nestedEmValue}em = {nestedEmValue * emValue * rootFontSize}px
            </div>
          </div>
          <div className="p-4 bg-primary text-primary-foreground rounded" style={{ padding: `${emValue}em` }}>
            This box has {emValue}em padding = {emValue * rootFontSize}px
          </div>
          <div
            className="p-4 bg-accent text-accent-foreground rounded flex items-center justify-center"
            style={{ width: `${emValue * 10}em`, height: `${emValue * 5}em` }}
          >
            {emValue * 10}em x {emValue * 5}em
          </div>
        </div>
        <p className="mt-4">
          Observe how the nested em values compound, and how em units affect not just font sizes, but also layout
          properties like padding and dimensions.
        </p>
      </div>
    </div>
  )
}

