module Chapter2 where

import Debug.Trace
import Math

diagonal w h = sqrt (w * w + h * h)

circleArea r = Math.pi * r * r

main = print (diagonal 3 4)
