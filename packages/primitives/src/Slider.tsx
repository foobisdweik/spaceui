"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import clsx from "clsx";

export const Slider = (props: SliderPrimitive.SliderProps) => {
	// Radix requires one Thumb per value, so render a thumb for each entry in
	// the controlled `value` (or uncontrolled `defaultValue`) array. Always
	// render at least one thumb, since Radix breaks with zero thumbs and an
	// empty array would otherwise yield a count of 0.
	const thumbCount = Math.max(1, (props.value ?? props.defaultValue)?.length ?? 1);

	return (
		<SliderPrimitive.Root
			{...props}
			className={clsx(
				"relative flex h-6 w-full select-none items-center",
				props.className,
			)}
		>
			<SliderPrimitive.Track className="relative h-2 grow rounded-full bg-app-slider outline-none">
				<SliderPrimitive.Range className="absolute h-full rounded-full bg-accent outline-none" />
			</SliderPrimitive.Track>
			{Array.from({ length: thumbCount }, (_, i) => (
				<SliderPrimitive.Thumb
					key={i}
					className="z-50 block size-5 rounded-full bg-accent font-bold shadow-lg shadow-black/20 outline-none ring-accent/30 transition focus:ring-4"
				/>
			))}
		</SliderPrimitive.Root>
	);
};
