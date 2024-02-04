import type { LenientSVGProps } from '@builder.io/qwik';

type _svgProp = LenientSVGProps<SVGSVGElement>;

export function GithubIcon({ ...svgProps }: _svgProp) {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 496 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...svgProps}
    >
      <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
    </svg>
  );
}
export function QwikLogo({ ...svgProps }: _svgProp) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 512 162'
      version='1.1'
      preserveAspectRatio='xMidYMid'
      {...svgProps}
    >
      <title>Qwik</title>
      <g>
        <path
          d='M251.258692,142.824522 L231.627559,142.824522 L231.627559,108.544233 C225.143325,113.000113 217.826105,115.198314 209.973897,115.198314 C199.325345,115.198314 191.413353,112.287 186.475832,106.227077 C181.53831,100.226632 179.039657,89.5327049 179.039657,74.2639441 C179.039657,58.6389336 181.95465,47.8260524 187.844112,41.5285278 C193.852529,35.1715261 203.489664,32.0820876 216.755517,32.0820876 C229.307644,32.0820876 240.7294,33.805085 251.258692,37.1916025 L251.258692,142.824522 Z M231.627559,49.9056059 C227.165854,48.5391648 222.168856,47.8855295 216.755517,47.8855295 C210.092852,47.8855295 205.333761,49.6085268 202.656677,53.113692 C200.03907,56.6783344 198.611619,63.4510628 198.611619,73.4916611 C198.611619,82.9381013 199.860639,89.2356259 202.478246,92.6813139 C205.095853,96.0678315 209.616728,97.7908288 216.2797,97.7908288 C224.964894,97.7908288 231.627559,94.2261865 231.627559,89.7703069 L231.627559,49.9056059 Z M279.398426,34.1613346 C286.358784,53.4699416 292.24794,72.7785487 297.364199,92.2655872 C304.145819,72.3033448 309.915714,52.9947378 314.376499,34.1613346 L331.569682,34.1613346 C338.053916,53.4699416 343.468174,72.7785487 347.809392,92.2655872 C355.544485,71.1150285 361.611765,51.7472509 366.07255,34.1613346 L385.405684,34.1613346 C377.198453,61.8470198 368.095999,88.2254344 358.043137,113.11876 L334.960492,113.11876 L334.170484,109.016257 C331.536284,95.7722081 327.646293,80.1174049 322.586795,61.7875426 C319.018168,77.5315074 314.079113,94.7013903 307.594879,113.11876 L284.514686,113.11876 C276.781126,84.363713 268.393318,58.1042526 259.469908,34.1613346 L279.398426,34.1613346 Z M407.240536,23.1702672 C398.555035,23.1702672 396.114633,21.0314818 396.114633,12.1792304 C396.114633,4.53243338 398.454683,2.56091643 406.424651,2.44167891 L407.240536,2.43578783 C415.926037,2.43578783 418.363373,4.27754015 418.363373,12.1792304 C418.363373,21.0314818 415.926037,23.1702672 407.240536,23.1702672 Z M397.481994,34.1613346 L417.11558,34.1613346 L417.11558,113.11876 L397.481994,113.11876 L397.481994,34.1613346 Z M487.07479,34.1613346 L509.856984,34.1613346 L507.575752,37.3871258 C494.867566,55.2613818 485.88184,66.2467605 480.768374,70.3427456 C485.229159,73.2540592 497.185902,88.5819906 512,113.178237 L489.392558,113.178237 L484.598291,105.937059 C469.388058,83.0871311 461.754644,72.9676827 457.805296,71.2934599 L457.805296,113.178237 L438.174776,113.178237 L438.174776,0 L457.805296,0 L457.805296,71.2339828 C462.266081,67.9664195 472.024622,55.6086657 487.07479,34.1613346 Z'
          fill='#000000'
        />
        <g transform='translate(0.000000, 9.326809)'>
          <path
            d='M125.616316,151.736958 L98.3705778,124.645431 L97.9542379,124.704908 L97.9542379,124.407829 L40.0124744,67.1948137 L54.2897453,53.4114482 L45.9019368,5.2884701 L6.10416287,54.5997645 C-0.677523957,61.4319701 -1.92677367,72.5419305 2.95127704,80.7405772 L27.8174243,121.972026 C31.6246658,128.329028 38.5252395,132.131272 45.9614139,132.071795 L58.2756329,131.952841 L125.616316,151.736958 Z'
            fill='#18B6F6'
          />
          <path
            d='M140.486212,53.6487436 L135.01309,43.5489747 L132.157574,38.3802893 L131.027509,36.3602129 L130.908555,36.4791672 L115.917252,10.516418 C112.169579,3.98119953 105.150051,-0.0587693311 97.5354453,2.23872938e-13 L84.3885465,0.35708006 L45.1854519,0.47591169 C37.7495841,0.535327506 30.9679647,4.45646474 27.2200776,10.8134664 L3.36524094,58.1046232 L46.0184384,5.1693932 L101.937673,66.600349 L92.0028457,76.6409473 L97.9517852,124.704602 L98.0112624,124.585647 L98.0112624,124.704602 L97.8923081,124.704602 L98.0112624,124.823249 L102.651398,129.338606 L125.197524,151.380095 C126.149464,152.271332 127.696176,151.20197 127.041621,150.073131 L113.12152,122.684525 L137.392788,77.8292636 L138.165991,76.9380264 C138.463377,76.5814701 138.760762,76.2252205 138.998977,75.8686643 C143.758068,69.3927083 144.412316,60.7188577 140.486212,53.6487436 Z'
            fill='#AC7EF4'
          />
          <polygon
            fill='#FFFFFF'
            points='102.115491 66.3630536 46.0178252 5.22896231 53.9892938 53.1143692 39.7120229 66.9572118 97.8322178 124.645431 92.5973104 76.7599015'
          />
        </g>
      </g>
    </svg>
  );
}
