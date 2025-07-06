import { BackgroundCircle } from "./BackgroundCircle.jsx";
import { Eyes } from "./Eyes.jsx";
import { Mouth } from "./Mouth.jsx";
import { FaceContainer } from "./FaceContainer.jsx";

export const Face = ({
  width,
  height,
  strokeWidth,
  eye,
  eyeOffsetX,
  eyeOffsetY,
  mouthRadius,
  mouthWidth,
}) => (
  <FaceContainer
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
  >
    <BackgroundCircle
      radius={height / 2 - strokeWidth / 2}
      strokeWidth={strokeWidth}
    />
    <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eye={eye} />
    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
  </FaceContainer>
);
