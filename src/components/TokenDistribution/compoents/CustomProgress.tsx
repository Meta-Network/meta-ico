import {
  chakra,
  Interpolation,
  omitThemingProps,
  StylesProvider,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  useStyles,
  HTMLChakraProps,
} from "@chakra-ui/system"
import { __DEV__ } from "@chakra-ui/utils"
import * as React from "react"

/**
 * Custom Progress by Frank Wei
 * It aims to implement the `linear-gradient` progress bar
 */

export interface GetProgressPropsOptions {
    value?: number;
    min: number;
    max: number;
    valueText?: string;
    getValueText?(value: number, percent: number): string;
    isIndeterminate?: boolean;
}
import { keyframes } from "@chakra-ui/system";
import { isFunction, valueToPercent } from "@chakra-ui/utils";
export var spin = keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
export var rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
export var progress = keyframes({
  "0%": {
    left: "-40%"
  },
  "100%": {
    left: "100%"
  }
});
export var stripe = keyframes({
  from: {
    backgroundPosition: "1rem 0"
  },
  to: {
    backgroundPosition: "0 0"
  }
});

/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
export function getProgressProps(options: GetProgressPropsOptions) {
  var {
    value = 0,
    min,
    max,
    valueText,
    getValueText,
    isIndeterminate
  } = options;
  var percent = valueToPercent(value, min, max);

  var getAriaValueText = () => {
    if (value == null) return undefined;
    return isFunction(getValueText) ? getValueText(value, percent) : valueText;
  };

  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : undefined,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": isIndeterminate ? undefined : value,
      "aria-valuetext": getAriaValueText(),
      role: "progressbar"
    },
    percent
  };
}


export interface ProgressLabelProps extends HTMLChakraProps<"div"> {}

/**
 * ProgressLabel is used to show the numeric value of the progress.
 * @see Docs https://chakra-ui.com/docs/feedback/progress
 */
export const ProgressLabel: React.FC<ProgressLabelProps> = (props) => {
  const styles = useStyles()
  const labelStyles: SystemStyleObject = {
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles.label,
  }
  return <chakra.div {...props} __css={labelStyles} />
}

if (__DEV__) {
  ProgressLabel.displayName = "ProgressLabel"
}

export interface ProgressFilledTrackProps
  extends HTMLChakraProps<"div">,
    GetProgressPropsOptions {}

/**
 * ProgressFilledTrack (Linear)
 *
 * The progress component that visually indicates the current level of the progress bar.
 * It applies `background-color` and changes its width.
 *
 * @see Docs https://chakra-ui.com/docs/components/progress
 */
const ProgressFilledTrack: React.FC<ProgressFilledTrackProps> = (props) => {
  const { min, max, value, isIndeterminate, ...rest } = props
  const progress = getProgressProps({ value, min, max, isIndeterminate })

  const styles = useStyles()
  const trackStyles = {
    height: "100%",
      ...styles.filledTrack,
    // @XXX: we use the background to implement `linear-gradient`
    bgColor: "inherit",
    background: "linear-gradient(90deg, #F49212 0%, #F4AF14 48%, #F9E8A5 100%)"
  }
  return (
    <chakra.div
      style={{
        width: `${progress.percent}%`,
        ...rest.style,
      }}
      {...progress.bind}
      {...rest}
      __css={trackStyles}
    />
  )
}

export interface ProgressTrackProps extends HTMLChakraProps<"div"> {}

interface ProgressOptions {
  /**
   * The `value` of the progress indicator.
   * If `undefined` the progress bar will be in `indeterminate` state
   */
  value?: number
  /**
   * The minimum value of the progress
   */
  min?: number
  /**
   * The maximum value of the progress
   */
  max?: number
  /**
   * If `true`, the progress bar will show stripe
   */
  hasStripe?: boolean
  /**
   * If `true`, and hasStripe is `true`, the stripes will be animated
   */
  isAnimated?: boolean
  /**
   * If `true`, the progress will be indeterminate and the `value`
   * prop will be ignored
   */
  isIndeterminate?: boolean
}

export interface ProgressProps
  extends ProgressOptions,
    ThemingProps<"Progress">,
    HTMLChakraProps<"div"> {}

/**
 * Progress (Linear)
 *
 * Progress is used to display the progress status for a task that takes a long
 * time or consists of several steps.
 *
 * It includes accessible attributes to help assistive technologies understand
 * and speak the progress values.
 *
 * @see Docs https://chakra-ui.com/docs/components/progress
 */
export const Progress: React.FC<ProgressProps> = (props) => {
  const {
    value,
    min = 0,
    max = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...rest
  } = omitThemingProps(props)

  const styles = useMultiStyleConfig("Progress", props)

  const borderRadius =
    propBorderRadius ??
    (styles.track?.borderRadius as string | number | undefined)

  const stripAnimation = { animation: `${stripe} 1s linear infinite` }

  /**
   * We should not use stripe if it is `indeterminate`
   */
  const shouldAddStripe = !isIndeterminate && hasStripe

  const shouldAnimateStripe = shouldAddStripe && isAnimated

  /**
   * Generate styles for stripe and stripe animation
   */
  const css: Interpolation<any> = {
    ...(shouldAnimateStripe && stripAnimation),
    ...(isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress} 1s ease infinite normal none running`,
    }),
  }

  const trackStyles: SystemStyleObject = {
    overflow: "hidden",
    position: "relative",
    ...styles.track,
  }

  return (
    <chakra.div borderRadius={borderRadius} __css={trackStyles} {...rest}>
      <StylesProvider value={styles}>
        <ProgressFilledTrack
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          min={min}
          max={max}
          value={value}
          isIndeterminate={isIndeterminate}
          css={css}
          borderRadius={borderRadius}
        />
        {children}
      </StylesProvider>
    </chakra.div>
  )
}

if (__DEV__) {
  Progress.displayName = "Progress"
}