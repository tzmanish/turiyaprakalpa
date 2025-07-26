const BgShape4 = ({ style = {} }) => {
  return (
    <svg className="absolute filter drop-shadow-lg transition-none" style={style} width="96" height="96" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="25" fill="#8b5cf6" opacity="0.8" />
      <circle cx="30" cy="30" r="15" fill="#ffffff" opacity="0.3" />
    </svg>
  )
};

export default BgShape4
