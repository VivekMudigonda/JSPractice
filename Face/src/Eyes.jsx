export const Eyes = ({ eyeOffsetX, eyeOffsetY, eye }) => (
  <>
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eye} fill="#F1C27D" />
    <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eye} fill="#F1C27D" />
  </>
);
