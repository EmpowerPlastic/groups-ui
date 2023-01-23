import { type MotionProps } from './framer-motion'

const fadeIn: MotionProps = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

const horizontalSlide = (fromRight = false): MotionProps => {
  const offset = 20
  const initial = { opacity: 0, x: fromRight ? offset : -offset }
  return {
    initial,
    animate: { opacity: 1, x: 0 },
    exit: initial,
    transition: { duration: 0.2 },
  }
}

const PAGE_OFFSET = 10
const pageTransition: MotionProps = {
  initial: { opacity: 0, scale: 0.98, height: '95%', y: 10 },
  animate: { opacity: 1, scale: 1, height: 'auto', y: 0 },
  exit: { opacity: 0, scale: 0.98, height: '95%', y: 10 },
  transition: { duration: 0.2, type: 'tween' },
}

/** framer-motion values - centralized here instead of in respective components
 * to allow one-off use ie if you want to use `<FadeIn />` animations on a
 * `motion.tr` instead of the default `motion.div` */
export const MOTIONS = {
  fadeIn,
  horizontalSlide,
  pageTransition,
}
