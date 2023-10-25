import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="515" y="230" rx="3" ry="3" width="88" height="6" /> 
    <rect x="557" y="230" rx="3" ry="3" width="52" height="6" /> 
    <rect x="421" y="223" rx="3" ry="3" width="410" height="6" /> 
    <rect x="411" y="228" rx="3" ry="3" width="380" height="6" /> 
    <rect x="458" y="234" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="571" cy="233" r="20" /> 
    <circle cx="611" cy="305" r="34" /> 
    <circle cx="530" cy="221" r="83" /> 
    <circle cx="123" cy="128" r="2" /> 
    <circle cx="581" cy="542" r="24" /> 
    <circle cx="575" cy="541" r="42" /> 
    <circle cx="580" cy="552" r="24" /> 
    <circle cx="586" cy="541" r="44" /> 
    <circle cx="204" cy="127" r="2" /> 
    <rect x="3" y="268" rx="10" ry="10" width="260" height="20" /> 
    <circle cx="128" cy="128" r="128" /> 
    <circle cx="178" cy="182" r="16" /> 
    <rect x="142" y="415" rx="0" ry="0" width="0" height="1" /> 
    <rect x="3" y="303" rx="0" ry="0" width="265" height="88" /> 
    <rect x="115" y="394" rx="0" ry="0" width="0" height="1" /> 
    <rect x="2" y="403" rx="10" ry="10" width="95" height="30" /> 
    <rect x="74" y="442" rx="0" ry="0" width="5" height="10" /> 
    <rect x="119" y="402" rx="15" ry="15" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton