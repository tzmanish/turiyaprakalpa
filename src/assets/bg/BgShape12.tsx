const BgShape12 = ({ style = {} }) => (
    <div
        className="absolute filter drop-shadow-lg transition-none"
        style={style}
    >
        <svg width="96" height="96" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" fill="#06b6d4" opacity="0.8" rx="8" />
            <rect x="15" y="15" width="20" height="20" fill="#ffffff" opacity="0.3" rx="4" />
        </svg>
    </div>
);

export default BgShape12
