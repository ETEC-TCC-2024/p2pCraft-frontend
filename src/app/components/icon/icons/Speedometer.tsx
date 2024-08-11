import React from "react";
import {IconProps} from "../Icon";
const Speedometer: React.FC <IconProps > = ({className}) => <div><svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_133_640)">
<path d="M11.7635 5.27597C11.5113 5.27597 11.3068 5.52132 11.3068 5.82398V7.48765C11.3068 7.7903 11.5112 8.03565 11.7634 8.03565C12.0156 8.03565 12.2201 7.7903 12.2201 7.48765V5.82398C12.2201 5.52132 12.0157 5.27597 11.7635 5.27597Z" fill="#8AD7CC"/>
<path d="M4.57411 13.9689C4.32009 13.9689 4.11417 14.216 4.11417 14.5209C4.11417 14.8257 4.32009 15.0728 4.57411 15.0728H5.93759C6.19161 15.0728 6.39754 14.8257 6.39754 14.5209C6.39754 14.216 6.19161 13.9689 5.93759 13.9689H4.57411Z" fill="#8AD7CC"/>
<path d="M17.8176 13.969C17.5636 13.969 17.3577 14.2161 17.3577 14.5209C17.3577 14.8257 17.5636 15.0728 17.8176 15.0728H19.1811C19.4351 15.0728 19.641 14.8257 19.641 14.5209C19.641 14.2161 19.4351 13.969 19.1811 13.969H17.8176Z" fill="#8AD7CC"/>
<path d="M6.3546 7.98377C6.17626 8.19931 6.17626 8.54878 6.3546 8.76433L7.32335 9.93518C7.50169 10.1507 7.79084 10.1507 7.96918 9.93518C8.14752 9.71961 8.14752 9.37015 7.96919 9.15461L7.00043 7.98377C6.82209 7.76823 6.53294 7.76823 6.3546 7.98377Z" fill="#8AD7CC"/>
<path d="M15.8654 9.93277C16.0437 10.1483 16.3328 10.1483 16.5112 9.93277L17.4799 8.76192C17.6583 8.54637 17.6583 8.1969 17.4799 7.98136C17.3016 7.76582 17.0124 7.76582 16.8341 7.98136L15.8654 9.1522C15.687 9.36774 15.687 9.7172 15.8654 9.93277Z" fill="#8AD7CC"/>
<path d="M5.19708 10.8433C4.98365 10.7364 4.73932 10.8579 4.65136 11.1145C4.5634 11.3712 4.66511 11.6658 4.87855 11.7727L6.21521 12.4419C6.42864 12.5487 6.67296 12.4273 6.76092 12.1706C6.84889 11.914 6.74717 11.6193 6.53374 11.5124L5.19708 10.8433Z" fill="#8AD7CC"/>
<path d="M13.7969 7.81071C13.7009 8.09092 13.812 8.41263 14.045 8.52929C14.278 8.64594 14.5447 8.51335 14.6408 8.23315L15.1668 6.69824C15.2628 6.41804 15.1518 6.09632 14.9188 5.97967C14.6858 5.86302 14.419 5.9956 14.323 6.27581L13.7969 7.81071Z" fill="#8AD7CC"/>
<path d="M9.432 6.27584C9.33596 5.99563 9.06924 5.86305 8.8362 5.9797C8.6032 6.09635 8.49216 6.41807 8.5882 6.69827L9.11424 8.23318C9.21028 8.51338 9.477 8.64597 9.71004 8.52931C9.94304 8.41266 10.0541 8.09095 9.95804 7.81074L9.432 6.27584Z" fill="#8AD7CC"/>
<path d="M16.9792 12.2144C17.0758 12.4961 17.3438 12.6293 17.578 12.5121L18.8395 11.8806C19.0737 11.7633 19.1853 11.44 19.0888 11.1583C18.9923 10.8767 18.7242 10.7435 18.49 10.8607L17.2285 11.4922C16.9943 11.6095 16.8827 11.9328 16.9792 12.2144Z" fill="#8AD7CC"/>
<path d="M18.8612 16.7825C19.2064 16.8943 19.5643 16.6484 19.6279 16.2262C19.8051 15.0497 19.7977 13.8409 19.6039 12.6634C19.3682 11.2311 18.863 9.88352 18.1274 8.72496C17.3918 7.56634 16.4456 6.62778 15.3618 5.98186C14.2781 5.33595 13.086 5 11.8776 5C10.6693 5 9.47716 5.33595 8.39344 5.98186C7.30971 6.62778 6.36347 7.56634 5.62789 8.72496C4.8923 9.88352 4.3871 11.2311 4.15137 12.6634C3.95758 13.8409 3.95016 15.0497 4.1274 16.2262C4.191 16.6484 4.54892 16.8943 4.89411 16.7825C5.23756 16.6712 5.43806 16.2478 5.38011 15.8267C5.24999 14.8809 5.26202 13.9123 5.41746 12.9678C5.61456 11.7702 6.03698 10.6435 6.65203 9.67474C7.26707 8.70596 8.05828 7.9212 8.9644 7.38116C9.87052 6.84108 10.8673 6.56018 11.8776 6.56018C12.888 6.56018 13.8848 6.84108 14.7909 7.38116C15.697 7.9212 16.4882 8.70596 17.1032 9.67474C17.7183 10.6435 18.1407 11.7702 18.3378 12.9678C18.4932 13.9123 18.5053 14.8809 18.3752 15.8267C18.3172 16.2478 18.5177 16.6712 18.8612 16.7825Z" fill="#009A84"/>
<path d="M14.255 10.7106C14.4596 10.5203 14.7465 10.5644 14.9062 10.8105C15.068 11.06 15.051 11.4239 14.8668 11.6505L12.3158 14.7902C12.0081 15.1689 11.5116 15.1511 11.2254 14.751C10.9512 14.3441 11.0096 13.7299 11.3529 13.4105L14.255 10.7106Z" fill="#009A84"/>
<path d="M12.1457 14.2018C12.1457 14.4669 11.9666 14.6818 11.7457 14.6818C11.5248 14.6818 11.3457 14.4669 11.3457 14.2018C11.3457 13.9367 11.5248 13.7218 11.7457 13.7218C11.9666 13.7218 12.1457 13.9367 12.1457 14.2018Z" fill="#8AD7CC"/>
</g>
<defs>
<clipPath id="clip0_133_640">
<rect width="16" height="12" fill="white" transform="translate(4 5)"/>
</clipPath>
</defs>
</svg>
</div>
export default Speedometer;
