interface Props {
  height: number,
  color: string,
  direction?: 'top' | 'bottom',
}

const GradientTransition: React.FC<Props> = ({ height, color, direction }) => {
  return (
    <>
      <div className="gradientTransition" />

      <style>{`
        .gradientTransition {
          position: absolute;
          z-index: 10;

          height: ${ height }vh;
          width: 100vw;
          top: -${ height }vh;

          background-color: linear-gradient(
            to ${ direction ? direction : 'top' },
            ${ color } 100%,
            ${ color } 0%,
          );
        }
      `}</style>
    </>
  )
}

export default GradientTransition
