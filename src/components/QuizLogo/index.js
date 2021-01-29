import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg className={className} width="107" height="86" viewBox="0 0 107 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64.368 10H72.208C72.5013 10 72.7546 10.1067 72.968 10.32C73.1813 10.5333 73.288 10.7867 73.288 11.08V27.16C73.288 30.8933 72.128 33.7067 69.808 35.6C67.488 37.4667 64.328 38.4 60.328 38.4C56.3546 38.4 53.1946 37.4667 50.848 35.6C48.528 33.7333 47.368 30.92 47.368 27.16V11.08C47.368 10.7867 47.4746 10.5333 47.688 10.32C47.9013 10.1067 48.1546 10 48.448 10H56.288C56.5813 10 56.8346 10.1067 57.048 10.32C57.2613 10.5333 57.368 10.7867 57.368 11.08V27.28C57.368 29.3333 58.3546 30.36 60.328 30.36C62.3013 30.36 63.288 29.3333 63.288 27.28V11.08C63.288 10.7867 63.3946 10.5333 63.608 10.32C63.8213 10.1067 64.0746 10 64.368 10ZM105.32 36.68C105.4 36.8133 105.44 36.9867 105.44 37.2C105.44 37.3867 105.347 37.5733 105.16 37.76C105 37.92 104.8 38 104.56 38H95.5605C94.8405 38 94.2938 37.6933 93.9205 37.08L90.4405 31.72L87.1205 37.08C86.7471 37.6933 86.2005 38 85.4805 38H76.7605C76.5205 38 76.3071 37.92 76.1205 37.76C75.9605 37.5733 75.8805 37.3867 75.8805 37.2C75.8805 36.9867 75.9205 36.8133 76.0005 36.68L84.4005 23.68L76.8405 11.32C76.7605 11.16 76.7205 10.9867 76.7205 10.8C76.7205 10.6133 76.8005 10.44 76.9605 10.28C77.1471 10.0933 77.3605 10 77.6005 10H86.2805C87.0271 10 87.5871 10.3333 87.9605 11L90.7605 15.88L93.8005 11C94.1738 10.3333 94.7338 10 95.4805 10H103.76C104 10 104.2 10.0933 104.36 10.28C104.547 10.44 104.64 10.6267 104.64 10.84C104.64 11.0267 104.6 11.1867 104.52 11.32L96.8005 23.56L105.32 36.68Z" fill="#FF7A90" />
      <path d="M72.968 10.32L73.6751 9.6129L73.6751 9.61289L72.968 10.32ZM69.808 35.6L70.4349 36.3791L70.4402 36.3747L69.808 35.6ZM50.848 35.6L50.2211 36.3791L50.2254 36.3826L50.848 35.6ZM47.688 10.32L46.9809 9.61289L46.9809 9.61289L47.688 10.32ZM57.048 10.32L57.7551 9.61289L57.7551 9.61289L57.048 10.32ZM63.608 10.32L64.3151 11.0271L64.3151 11.0271L63.608 10.32ZM64.368 11H72.208V9H64.368V11ZM72.208 11C72.2204 11 72.227 11.0011 72.229 11.0015C72.2308 11.0018 72.2307 11.002 72.2299 11.0016C72.2292 11.0013 72.2307 11.0018 72.2349 11.0047C72.2393 11.0077 72.2482 11.0144 72.2609 11.0271L73.6751 9.61289C73.2802 9.21801 72.7749 9 72.208 9V11ZM72.2609 11.0271C72.2736 11.0398 72.2802 11.0486 72.2832 11.053C72.2861 11.0573 72.2866 11.0588 72.2863 11.0581C72.286 11.0573 72.2861 11.0572 72.2865 11.059C72.2869 11.061 72.288 11.0675 72.288 11.08H74.288C74.288 10.5131 74.07 10.0078 73.6751 9.6129L72.2609 11.0271ZM72.288 11.08V27.16H74.288V11.08H72.288ZM72.288 27.16C72.288 30.674 71.2067 33.1677 69.1757 34.8252L70.4402 36.3747C73.0492 34.2456 74.288 31.1127 74.288 27.16H72.288ZM69.1811 34.8209C67.0914 36.5023 64.1782 37.4 60.328 37.4V39.4C64.4778 39.4 67.8846 38.4311 70.4348 36.3791L69.1811 34.8209ZM60.328 37.4C56.5071 37.4 53.5901 36.5034 51.4705 34.8174L50.2254 36.3826C52.7992 38.4299 56.2022 39.4 60.328 39.4V37.4ZM51.4748 34.8209C49.451 33.1925 48.368 30.704 48.368 27.16H46.368C46.368 31.136 47.6049 34.2742 50.2211 36.3791L51.4748 34.8209ZM48.368 27.16V11.08H46.368V27.16H48.368ZM48.368 11.08C48.368 11.0675 48.3691 11.061 48.3695 11.059C48.3698 11.0572 48.3699 11.0573 48.3696 11.0581C48.3693 11.0588 48.3698 11.0573 48.3727 11.053C48.3757 11.0486 48.3824 11.0398 48.3951 11.0271L46.9809 9.61289C46.586 10.0078 46.368 10.5131 46.368 11.08H48.368ZM48.3951 11.0271C48.4078 11.0144 48.4166 11.0077 48.421 11.0047C48.4252 11.0018 48.4268 11.0013 48.426 11.0016C48.4252 11.002 48.4252 11.0018 48.427 11.0015C48.429 11.0011 48.4355 11 48.448 11V9C47.8811 9 47.3757 9.21801 46.9809 9.61289L48.3951 11.0271ZM48.448 11H56.288V9H48.448V11ZM56.288 11C56.3004 11 56.307 11.0011 56.309 11.0015C56.3108 11.0018 56.3107 11.002 56.3099 11.0016C56.3092 11.0013 56.3107 11.0018 56.3149 11.0047C56.3193 11.0077 56.3281 11.0144 56.3409 11.0271L57.7551 9.61289C57.3602 9.21801 56.8549 9 56.288 9V11ZM56.3409 11.0271C56.3536 11.0398 56.3602 11.0486 56.3632 11.053C56.3661 11.0573 56.3666 11.0588 56.3663 11.0581C56.366 11.0573 56.3661 11.0572 56.3665 11.059C56.3669 11.061 56.368 11.0675 56.368 11.08H58.368C58.368 10.5131 58.15 10.0078 57.7551 9.61289L56.3409 11.0271ZM56.368 11.08V27.28H58.368V11.08H56.368ZM56.368 27.28C56.368 28.4511 56.6488 29.5148 57.387 30.2829C58.1323 31.0584 59.1768 31.36 60.328 31.36V29.36C59.5058 29.36 59.0703 29.1482 58.829 28.8971C58.5805 28.6385 58.368 28.1622 58.368 27.28H56.368ZM60.328 31.36C61.4791 31.36 62.5237 31.0584 63.269 30.2829C64.0072 29.5148 64.288 28.4511 64.288 27.28H62.288C62.288 28.1622 62.0754 28.6385 61.827 28.8971C61.5856 29.1482 61.1502 29.36 60.328 29.36V31.36ZM64.288 27.28V11.08H62.288V27.28H64.288ZM64.288 11.08C64.288 11.0675 64.2891 11.061 64.2895 11.059C64.2898 11.0572 64.2899 11.0573 64.2896 11.0581C64.2893 11.0588 64.2898 11.0573 64.2927 11.053C64.2957 11.0486 64.3024 11.0398 64.3151 11.0271L62.9009 9.61289C62.506 10.0078 62.288 10.5131 62.288 11.08H64.288ZM64.3151 11.0271C64.3278 11.0144 64.3366 11.0077 64.341 11.0047C64.3452 11.0018 64.3468 11.0013 64.346 11.0016C64.3452 11.002 64.3452 11.0018 64.347 11.0015C64.349 11.0011 64.3555 11 64.368 11V9C63.8011 9 63.2957 9.21801 62.9009 9.61289L64.3151 11.0271ZM105.32 36.68L106.178 36.1655L106.169 36.1503L106.159 36.1354L105.32 36.68ZM105.16 37.76L105.868 38.4671H105.868L105.16 37.76ZM93.9205 37.08L94.7747 36.5601L94.7671 36.5476L94.7592 36.5354L93.9205 37.08ZM90.4405 31.72L91.2792 31.1755L90.4206 29.853L89.5903 31.1934L90.4405 31.72ZM87.1205 37.08L86.2703 36.5534L86.2663 36.5601L87.1205 37.08ZM76.1205 37.76L75.3612 38.4108L75.4113 38.4692L75.4697 38.5193L76.1205 37.76ZM76.0005 36.68L75.1606 36.1373L75.1515 36.1512L75.143 36.1655L76.0005 36.68ZM84.4005 23.68L85.2404 24.2227L85.5816 23.6946L85.2535 23.1582L84.4005 23.68ZM76.8405 11.32L75.946 11.7672L75.9651 11.8054L75.9874 11.8418L76.8405 11.32ZM76.9605 10.28L77.6676 10.9871V10.9871L76.9605 10.28ZM87.9605 11L87.0879 11.4886L87.0931 11.4977L87.9605 11ZM90.7605 15.88L89.8931 16.3777L90.7252 17.8279L91.6092 16.4087L90.7605 15.88ZM93.8005 11L94.6493 11.5287L94.6616 11.509L94.673 11.4886L93.8005 11ZM104.36 10.28L103.601 10.9308L103.651 10.9892L103.71 11.0393L104.36 10.28ZM104.52 11.32L105.366 11.8535L105.372 11.844L105.378 11.8345L104.52 11.32ZM96.8005 23.56L95.9547 23.0265L95.6132 23.5679L95.9618 24.1046L96.8005 23.56ZM104.463 37.1945C104.442 37.1595 104.436 37.1358 104.436 37.1349C104.436 37.1345 104.437 37.1394 104.438 37.1504C104.439 37.1614 104.44 37.1778 104.44 37.2H106.44C106.44 36.8702 106.38 36.5017 106.178 36.1655L104.463 37.1945ZM104.44 37.2C104.44 37.1206 104.462 37.0617 104.476 37.0328C104.488 37.0084 104.49 37.0164 104.453 37.0529L105.868 38.4671C106.163 38.1714 106.44 37.7454 106.44 37.2H104.44ZM104.453 37.0529C104.464 37.0421 104.487 37.0243 104.519 37.0115C104.55 36.9992 104.568 37 104.56 37V39C105.048 39 105.508 38.8269 105.868 38.4671L104.453 37.0529ZM104.56 37H95.5605V39H104.56V37ZM95.5605 37C95.1883 37 94.9659 36.8743 94.7747 36.5601L93.0663 37.5999C93.6217 38.5124 94.4927 39 95.5605 39V37ZM94.7592 36.5354L91.2792 31.1755L89.6017 32.2645L93.0817 37.6245L94.7592 36.5354ZM89.5903 31.1934L86.2703 36.5534L87.9706 37.6066L91.2906 32.2466L89.5903 31.1934ZM86.2663 36.5601C86.075 36.8743 85.8527 37 85.4805 37V39C86.5483 39 87.4193 38.5124 87.9747 37.5999L86.2663 36.5601ZM85.4805 37H76.7605V39H85.4805V37ZM76.7605 37C76.7563 37 76.7562 36.9997 76.7593 37.0002C76.7624 37.0008 76.7668 37.0019 76.7716 37.0037C76.7763 37.0054 76.7792 37.0071 76.78 37.0075C76.7806 37.0079 76.7776 37.0062 76.7713 37.0007L75.4697 38.5193C75.8327 38.8305 76.2755 39 76.7605 39V37ZM76.8797 37.1092C76.8523 37.0773 76.8523 37.069 76.8596 37.0861C76.8682 37.1062 76.8805 37.1464 76.8805 37.2H74.8805C74.8805 37.6923 75.0958 38.1012 75.3612 38.4108L76.8797 37.1092ZM76.8805 37.2C76.8805 37.1778 76.8815 37.1614 76.8827 37.1504C76.8838 37.1394 76.8849 37.1345 76.8849 37.1349C76.8846 37.1358 76.879 37.1595 76.858 37.1945L75.143 36.1655C74.9413 36.5017 74.8805 36.8702 74.8805 37.2H76.8805ZM76.8404 37.2227L85.2404 24.2227L83.5606 23.1373L75.1606 36.1373L76.8404 37.2227ZM85.2535 23.1582L77.6935 10.7982L75.9874 11.8418L83.5474 24.2018L85.2535 23.1582ZM77.7349 10.8728C77.7274 10.8577 77.7205 10.8384 77.7205 10.8H75.7205C75.7205 11.135 75.7936 11.4623 75.946 11.7672L77.7349 10.8728ZM77.7205 10.8C77.7205 10.8547 77.7076 10.9074 77.6884 10.9491C77.6708 10.9873 77.6559 10.9988 77.6676 10.9871L76.2534 9.57289C75.9483 9.87798 75.7205 10.2936 75.7205 10.8H77.7205ZM77.6676 10.9871C77.6844 10.9702 77.6831 10.9766 77.6613 10.9862C77.651 10.9906 77.6393 10.9944 77.6271 10.997C77.615 10.9994 77.6057 11 77.6005 11V9C77.0675 9 76.607 9.21928 76.2534 9.57289L77.6676 10.9871ZM77.6005 11H86.2805V9H77.6005V11ZM86.2805 11C86.5005 11 86.6451 11.0475 86.749 11.1093C86.854 11.1718 86.9721 11.2817 87.088 11.4886L88.833 10.5114C88.5755 10.0516 88.2269 9.66153 87.772 9.39071C87.3158 9.11918 86.8071 9 86.2805 9V11ZM87.0931 11.4977L89.8931 16.3777L91.6278 15.3823L88.8278 10.5023L87.0931 11.4977ZM91.6092 16.4087L94.6493 11.5287L92.9517 10.4713L89.9117 15.3513L91.6092 16.4087ZM94.673 11.4886C94.7888 11.2817 94.9069 11.1718 95.012 11.1093C95.1158 11.0475 95.2605 11 95.4805 11V9C94.9538 9 94.4451 9.11918 93.989 9.39071C93.534 9.66153 93.1855 10.0516 92.928 10.5114L94.673 11.4886ZM95.4805 11H103.76V9H95.4805V11ZM103.76 11C103.747 11 103.711 10.9966 103.668 10.9762C103.625 10.9561 103.603 10.9332 103.601 10.9308L105.12 9.62921C104.775 9.22711 104.3 9 103.76 9V11ZM103.71 11.0393C103.72 11.0477 103.699 11.0323 103.676 10.9872C103.652 10.9385 103.64 10.885 103.64 10.84H105.64C105.64 10.2887 105.382 9.83853 105.011 9.52074L103.71 11.0393ZM103.64 10.84C103.64 10.8621 103.638 10.8664 103.64 10.8575C103.643 10.8476 103.649 10.8284 103.663 10.8055L105.378 11.8345C105.568 11.5172 105.64 11.1714 105.64 10.84H103.64ZM103.675 10.7865L95.9547 23.0265L97.6463 24.0935L105.366 11.8535L103.675 10.7865ZM95.9618 24.1046L104.482 37.2246L106.159 36.1354L97.6391 23.0154L95.9618 24.1046Z" fill="#FFFAF8" />
      <path d="M5.86188 48.56C8.31521 46.5867 11.5552 45.6 15.5819 45.6C19.6085 45.6 22.8352 46.6 25.2619 48.6C27.7152 50.5733 28.9419 53.36 28.9419 56.96V63.2C28.9419 66.3467 27.9952 68.8933 26.1019 70.84L29.2219 75.36C29.3019 75.52 29.3419 75.68 29.3419 75.84C29.3419 76.0267 29.2619 76.2 29.1019 76.36C28.9685 76.52 28.7819 76.6 28.5419 76.6H20.7019C20.0352 76.6 19.4752 76.2933 19.0219 75.68L17.9019 74.28C17.1285 74.36 16.3552 74.4 15.5819 74.4C11.5019 74.4 8.24854 73.4533 5.82188 71.56C3.42188 69.64 2.22188 66.8533 2.22188 63.2V56.96C2.22188 53.3333 3.43521 50.5333 5.86188 48.56ZM13.4219 65.8C13.9552 66.3333 14.6752 66.6 15.5819 66.6C16.4885 66.6 17.2085 66.3333 17.7419 65.8C18.2752 65.2667 18.5419 64.4533 18.5419 63.36V56.64C18.5419 55.5733 18.2752 54.7733 17.7419 54.24C17.2085 53.68 16.4885 53.4 15.5819 53.4C14.6752 53.4 13.9552 53.68 13.4219 54.24C12.8885 54.7733 12.6219 55.5733 12.6219 56.64V63.36C12.6219 64.4533 12.8885 65.2667 13.4219 65.8ZM50.3641 46H58.2041C58.4974 46 58.7507 46.1067 58.9641 46.32C59.1774 46.5333 59.2841 46.7867 59.2841 47.08V63.16C59.2841 66.8933 58.1241 69.7067 55.8041 71.6C53.4841 73.4667 50.3241 74.4 46.3241 74.4C42.3507 74.4 39.1907 73.4667 36.8441 71.6C34.5241 69.7333 33.3641 66.92 33.3641 63.16V47.08C33.3641 46.7867 33.4707 46.5333 33.6841 46.32C33.8974 46.1067 34.1507 46 34.4441 46H42.2841C42.5774 46 42.8307 46.1067 43.0441 46.32C43.2574 46.5333 43.3641 46.7867 43.3641 47.08V63.28C43.3641 65.3333 44.3507 66.36 46.3241 66.36C48.2974 66.36 49.2841 65.3333 49.2841 63.28V47.08C49.2841 46.7867 49.3907 46.5333 49.6041 46.32C49.8174 46.1067 50.0707 46 50.3641 46ZM73.3166 74H65.1566C64.8632 74 64.6099 73.8933 64.3966 73.68C64.1832 73.4667 64.0766 73.2133 64.0766 72.92V47.08C64.0766 46.7867 64.1832 46.5333 64.3966 46.32C64.6099 46.1067 64.8632 46 65.1566 46H73.3166C73.6099 46 73.8632 46.1067 74.0766 46.32C74.2899 46.5333 74.3966 46.7867 74.3966 47.08V72.92C74.3966 73.2133 74.2899 73.4667 74.0766 73.68C73.8632 73.8933 73.6099 74 73.3166 74ZM102.704 65.8C102.998 65.8 103.251 65.9067 103.464 66.12C103.678 66.3333 103.784 66.5867 103.784 66.88V72.92C103.784 73.2133 103.678 73.4667 103.464 73.68C103.251 73.8933 102.998 74 102.704 74H79.8644C79.571 74 79.3177 73.8933 79.1044 73.68C78.891 73.4667 78.7844 73.2133 78.7844 72.92V67.16C78.7844 66.6267 78.9844 66.16 79.3844 65.76L90.5844 54.12H80.0644C79.771 54.12 79.5177 54.0133 79.3044 53.8C79.091 53.5867 78.9844 53.3333 78.9844 53.04V47.08C78.9844 46.7867 79.091 46.5333 79.3044 46.32C79.5177 46.1067 79.771 46 80.0644 46H102.184C102.478 46 102.731 46.1067 102.944 46.32C103.158 46.5333 103.264 46.7867 103.264 47.08V52.76C103.264 53.2933 103.091 53.7333 102.744 54.08L92.1444 65.8H102.704Z" fill="#FF7A90" />
      <path d="M5.86188 48.56L5.23511 47.7808L5.23096 47.7841L5.86188 48.56ZM25.2619 48.6L24.6258 49.3717L24.6351 49.3792L25.2619 48.6ZM26.1019 70.84L25.385 70.1428L24.8121 70.7318L25.2789 71.4081L26.1019 70.84ZM29.2219 75.36L30.1163 74.9128L30.0848 74.8498L30.0449 74.7919L29.2219 75.36ZM29.1019 76.36L28.3948 75.6529L28.3627 75.685L28.3337 75.7198L29.1019 76.36ZM19.0219 75.68L19.8261 75.0856L19.8147 75.0702L19.8027 75.0553L19.0219 75.68ZM17.9019 74.28L18.6827 73.6553L18.3418 73.2292L17.799 73.2853L17.9019 74.28ZM5.82188 71.56L5.19713 72.3409L5.20674 72.3484L5.82188 71.56ZM13.4219 65.8L14.129 65.0929V65.0929L13.4219 65.8ZM17.7419 65.8L18.449 66.5071L17.7419 65.8ZM17.7419 54.24L17.0177 54.9297L17.0261 54.9385L17.0348 54.9471L17.7419 54.24ZM13.4219 54.24L14.129 54.9471L14.1376 54.9385L14.146 54.9297L13.4219 54.24ZM6.48863 49.3392C8.71978 47.5446 11.7186 46.6 15.5819 46.6V44.6C11.3918 44.6 7.91064 45.6287 5.23512 47.7808L6.48863 49.3392ZM15.5819 46.6C19.4428 46.6 22.4235 47.5566 24.6259 49.3717L25.8979 47.8283C23.2469 45.6434 19.7743 44.6 15.5819 44.6V46.6ZM24.6351 49.3792C26.8168 51.134 27.9419 53.6139 27.9419 56.96H29.9419C29.9419 53.1061 28.6136 50.0126 25.8886 47.8208L24.6351 49.3792ZM27.9419 56.96V63.2H29.9419V56.96H27.9419ZM27.9419 63.2C27.9419 66.1308 27.0679 68.4125 25.385 70.1428L26.8187 71.5372C28.9225 69.3742 29.9419 66.5625 29.9419 63.2H27.9419ZM25.2789 71.4081L28.3989 75.9281L30.0449 74.7919L26.9249 70.2719L25.2789 71.4081ZM28.3274 75.8072C28.3375 75.8274 28.3409 75.839 28.3417 75.8425C28.3425 75.8457 28.3419 75.8442 28.3419 75.84H30.3419C30.3419 75.5072 30.2574 75.1951 30.1163 74.9128L28.3274 75.8072ZM28.3419 75.84C28.3419 75.7853 28.3547 75.7326 28.3739 75.6909C28.3916 75.6527 28.4064 75.6412 28.3948 75.6529L29.809 77.0671C30.1141 76.762 30.3419 76.3464 30.3419 75.84H28.3419ZM28.3337 75.7198C28.3653 75.6818 28.4125 75.6446 28.468 75.6209C28.5196 75.5987 28.5507 75.6 28.5419 75.6V77.6C29.0281 77.6 29.5166 77.4243 29.8701 77.0002L28.3337 75.7198ZM28.5419 75.6H20.7019V77.6H28.5419V75.6ZM20.7019 75.6C20.4013 75.6 20.1219 75.4859 19.8261 75.0856L18.2177 76.2744C18.8285 77.1008 19.6691 77.6 20.7019 77.6V75.6ZM19.8027 75.0553L18.6827 73.6553L17.121 74.9047L18.241 76.3047L19.8027 75.0553ZM17.799 73.2853C17.0596 73.3618 16.3207 73.4 15.5819 73.4V75.4C16.3898 75.4 17.1974 75.3582 18.0048 75.2747L17.799 73.2853ZM15.5819 73.4C11.6522 73.4 8.63822 72.489 6.43701 70.7716L5.20674 72.3484C7.85887 74.4177 11.3515 75.4 15.5819 75.4V73.4ZM6.44657 70.7791C4.32954 69.0855 3.22188 66.6134 3.22188 63.2H1.22188C1.22188 67.0932 2.51421 70.1945 5.19718 72.3409L6.44657 70.7791ZM3.22188 63.2V56.96H1.22188V63.2H3.22188ZM3.22188 56.96C3.22188 53.5805 4.33839 51.0878 6.49279 49.3359L5.23096 47.7841C2.53203 49.9789 1.22188 53.0861 1.22188 56.96H3.22188ZM12.7148 66.5071C13.4726 67.265 14.4673 67.6 15.5819 67.6V65.6C14.8831 65.6 14.4378 65.4017 14.129 65.0929L12.7148 66.5071ZM15.5819 67.6C16.6964 67.6 17.6911 67.265 18.449 66.5071L17.0348 65.0929C16.726 65.4017 16.2807 65.6 15.5819 65.6V67.6ZM18.449 66.5071C19.2401 65.716 19.5419 64.5991 19.5419 63.36H17.5419C17.5419 64.3075 17.3103 64.8174 17.0348 65.0929L18.449 66.5071ZM19.5419 63.36V56.64H17.5419V63.36H19.5419ZM19.5419 56.64C19.5419 55.4192 19.236 54.3199 18.449 53.5329L17.0348 54.9471C17.3144 55.2268 17.5419 55.7275 17.5419 56.64H19.5419ZM18.466 53.5503C17.7113 52.7579 16.711 52.4 15.5819 52.4V54.4C16.2661 54.4 16.7058 54.6021 17.0177 54.9297L18.466 53.5503ZM15.5819 52.4C14.4528 52.4 13.4525 52.7579 12.6977 53.5503L14.146 54.9297C14.4579 54.6021 14.8976 54.4 15.5819 54.4V52.4ZM12.7148 53.5329C11.9278 54.3199 11.6219 55.4192 11.6219 56.64H13.6219C13.6219 55.7275 13.8493 55.2268 14.129 54.9471L12.7148 53.5329ZM11.6219 56.64V63.36H13.6219V56.64H11.6219ZM11.6219 63.36C11.6219 64.5991 11.9236 65.716 12.7148 66.5071L14.129 65.0929C13.8535 64.8174 13.6219 64.3075 13.6219 63.36H11.6219ZM58.9641 46.32L59.6712 45.6129V45.6129L58.9641 46.32ZM55.8041 71.6L56.431 72.3791L56.4363 72.3747L55.8041 71.6ZM36.8441 71.6L36.2172 72.3791L36.2215 72.3826L36.8441 71.6ZM33.6841 46.32L32.977 45.6129V45.6129L33.6841 46.32ZM43.0441 46.32L43.7512 45.6129V45.6129L43.0441 46.32ZM49.6041 46.32L50.3112 47.0271L50.3112 47.0271L49.6041 46.32ZM50.3641 47H58.2041V45H50.3641V47ZM58.2041 47C58.2165 47 58.2231 47.0011 58.2251 47.0015C58.2269 47.0018 58.2268 47.002 58.226 47.0016C58.2253 47.0013 58.2268 47.0018 58.231 47.0047C58.2354 47.0077 58.2442 47.0144 58.257 47.0271L59.6712 45.6129C59.2763 45.218 58.771 45 58.2041 45V47ZM58.257 47.0271C58.2697 47.0398 58.2763 47.0486 58.2793 47.053C58.2822 47.0573 58.2827 47.0588 58.2824 47.0581C58.2821 47.0573 58.2822 47.0572 58.2826 47.059C58.283 47.061 58.2841 47.0675 58.2841 47.08H60.2841C60.2841 46.5131 60.0661 46.0078 59.6712 45.6129L58.257 47.0271ZM58.2841 47.08V63.16H60.2841V47.08H58.2841ZM58.2841 63.16C58.2841 66.674 57.2028 69.1677 55.1718 70.8252L56.4363 72.3747C59.0453 70.2456 60.2841 67.1127 60.2841 63.16H58.2841ZM55.1772 70.8209C53.0875 72.5023 50.1742 73.4 46.3241 73.4V75.4C50.4739 75.4 53.8807 74.4311 56.4309 72.3791L55.1772 70.8209ZM46.3241 73.4C42.5032 73.4 39.5862 72.5034 37.4666 70.8174L36.2215 72.3826C38.7953 74.4299 42.1983 75.4 46.3241 75.4V73.4ZM37.4709 70.8209C35.4471 69.1925 34.3641 66.704 34.3641 63.16H32.3641C32.3641 67.136 33.601 70.2742 36.2172 72.3791L37.4709 70.8209ZM34.3641 63.16V47.08H32.3641V63.16H34.3641ZM34.3641 47.08C34.3641 47.0675 34.3652 47.061 34.3656 47.059C34.3659 47.0572 34.366 47.0573 34.3657 47.0581C34.3654 47.0588 34.3659 47.0573 34.3688 47.053C34.3718 47.0486 34.3785 47.0398 34.3912 47.0271L32.977 45.6129C32.5821 46.0078 32.3641 46.5131 32.3641 47.08H34.3641ZM34.3912 47.0271C34.4039 47.0144 34.4127 47.0077 34.4171 47.0047C34.4213 47.0018 34.4229 47.0013 34.4221 47.0016C34.4213 47.002 34.4212 47.0018 34.4231 47.0015C34.4251 47.0011 34.4316 47 34.4441 47V45C33.8772 45 33.3718 45.218 32.977 45.6129L34.3912 47.0271ZM34.4441 47H42.2841V45H34.4441V47ZM42.2841 47C42.2965 47 42.3031 47.0011 42.3051 47.0015C42.3069 47.0018 42.3068 47.002 42.306 47.0016C42.3053 47.0013 42.3068 47.0018 42.311 47.0047C42.3154 47.0077 42.3242 47.0144 42.337 47.0271L43.7512 45.6129C43.3563 45.218 42.851 45 42.2841 45V47ZM42.337 47.0271C42.3497 47.0398 42.3563 47.0486 42.3593 47.053C42.3622 47.0573 42.3627 47.0588 42.3624 47.0581C42.3621 47.0573 42.3622 47.0572 42.3626 47.059C42.363 47.061 42.3641 47.0675 42.3641 47.08H44.3641C44.3641 46.5131 44.1461 46.0078 43.7512 45.6129L42.337 47.0271ZM42.3641 47.08V63.28H44.3641V47.08H42.3641ZM42.3641 63.28C42.3641 64.4511 42.6449 65.5148 43.383 66.2829C44.1284 67.0584 45.1729 67.36 46.3241 67.36V65.36C45.5019 65.36 45.0664 65.1482 44.8251 64.8971C44.5766 64.6385 44.3641 64.1622 44.3641 63.28H42.3641ZM46.3241 67.36C47.4752 67.36 48.5198 67.0584 49.2651 66.2829C50.0033 65.5148 50.2841 64.4511 50.2841 63.28H48.2841C48.2841 64.1622 48.0715 64.6385 47.8231 64.8971C47.5817 65.1482 47.1462 65.36 46.3241 65.36V67.36ZM50.2841 63.28V47.08H48.2841V63.28H50.2841ZM50.2841 47.08C50.2841 47.0675 50.2852 47.061 50.2856 47.059C50.2859 47.0572 50.286 47.0573 50.2857 47.0581C50.2854 47.0588 50.2859 47.0573 50.2888 47.053C50.2918 47.0486 50.2985 47.0398 50.3112 47.0271L48.897 45.6129C48.5021 46.0078 48.2841 46.5131 48.2841 47.08H50.2841ZM50.3112 47.0271C50.3239 47.0144 50.3327 47.0077 50.3371 47.0047C50.3413 47.0018 50.3429 47.0013 50.3421 47.0016C50.3413 47.002 50.3412 47.0018 50.3431 47.0015C50.3451 47.0011 50.3516 47 50.3641 47V45C49.7972 45 49.2918 45.218 48.897 45.6129L50.3112 47.0271ZM64.3966 73.68L65.1037 72.9729L64.3966 73.68ZM64.3966 46.32L65.1037 47.0271V47.0271L64.3966 46.32ZM74.0766 46.32L74.7837 45.6129V45.6129L74.0766 46.32ZM74.0766 73.68L74.7837 74.3871L74.0766 73.68ZM73.3166 73H65.1566V75H73.3166V73ZM65.1566 73C65.1441 73 65.1376 72.9989 65.1356 72.9985C65.1337 72.9982 65.1338 72.998 65.1346 72.9984C65.1354 72.9987 65.1338 72.9982 65.1296 72.9953C65.1252 72.9923 65.1164 72.9856 65.1037 72.9729L63.6895 74.3871C64.0843 74.782 64.5897 75 65.1566 75V73ZM65.1037 72.9729C65.091 72.9602 65.0843 72.9514 65.0813 72.947C65.0784 72.9427 65.0779 72.9412 65.0782 72.9419C65.0785 72.9427 65.0784 72.9428 65.0781 72.941C65.0777 72.939 65.0766 72.9325 65.0766 72.92H63.0766C63.0766 73.4869 63.2946 73.9922 63.6895 74.3871L65.1037 72.9729ZM65.0766 72.92V47.08H63.0766V72.92H65.0766ZM65.0766 47.08C65.0766 47.0675 65.0777 47.061 65.0781 47.059C65.0784 47.0572 65.0785 47.0573 65.0782 47.0581C65.0779 47.0588 65.0784 47.0573 65.0813 47.053C65.0843 47.0486 65.091 47.0398 65.1037 47.0271L63.6895 45.6129C63.2946 46.0078 63.0766 46.5131 63.0766 47.08H65.0766ZM65.1037 47.0271C65.1164 47.0144 65.1252 47.0077 65.1296 47.0047C65.1338 47.0018 65.1354 47.0013 65.1346 47.0016C65.1338 47.002 65.1337 47.0018 65.1356 47.0015C65.1376 47.0011 65.1441 47 65.1566 47V45C64.5897 45 64.0843 45.218 63.6895 45.6129L65.1037 47.0271ZM65.1566 47H73.3166V45H65.1566V47ZM73.3166 47C73.329 47 73.3356 47.0011 73.3376 47.0015C73.3394 47.0018 73.3393 47.002 73.3385 47.0016C73.3378 47.0013 73.3393 47.0018 73.3435 47.0047C73.3479 47.0077 73.3567 47.0144 73.3695 47.0271L74.7837 45.6129C74.3888 45.218 73.8835 45 73.3166 45V47ZM73.3695 47.0271C73.3822 47.0398 73.3888 47.0486 73.3918 47.053C73.3947 47.0573 73.3952 47.0588 73.3949 47.0581C73.3946 47.0573 73.3947 47.0572 73.3951 47.059C73.3955 47.061 73.3966 47.0675 73.3966 47.08H75.3966C75.3966 46.5131 75.1786 46.0078 74.7837 45.6129L73.3695 47.0271ZM73.3966 47.08V72.92H75.3966V47.08H73.3966ZM73.3966 72.92C73.3966 72.9325 73.3955 72.939 73.3951 72.941C73.3947 72.9428 73.3946 72.9427 73.3949 72.9419C73.3952 72.9412 73.3947 72.9427 73.3918 72.947C73.3888 72.9514 73.3822 72.9602 73.3695 72.9729L74.7837 74.3871C75.1786 73.9922 75.3966 73.4869 75.3966 72.92H73.3966ZM73.3695 72.9729C73.3567 72.9856 73.3479 72.9923 73.3435 72.9953C73.3393 72.9982 73.3378 72.9987 73.3385 72.9984C73.3393 72.998 73.3394 72.9982 73.3376 72.9985C73.3356 72.9989 73.329 73 73.3166 73V75C73.8835 75 74.3888 74.782 74.7837 74.3871L73.3695 72.9729ZM103.464 66.12L104.171 65.4129V65.4129L103.464 66.12ZM103.464 73.68L104.171 74.3871V74.3871L103.464 73.68ZM79.3844 65.76L80.0915 66.4671L80.0983 66.4603L80.105 66.4534L79.3844 65.76ZM90.5844 54.12L91.305 54.8134L92.9343 53.12H90.5844V54.12ZM79.3044 53.8L78.5973 54.5071L79.3044 53.8ZM79.3044 46.32L80.0115 47.0271V47.0271L79.3044 46.32ZM102.944 46.32L103.651 45.6129L103.651 45.6129L102.944 46.32ZM102.744 54.08L102.037 53.3729L102.02 53.3906L102.003 53.4092L102.744 54.08ZM92.1444 65.8L91.4027 65.1292L89.8916 66.8H92.1444V65.8ZM102.704 66.8C102.717 66.8 102.723 66.8011 102.725 66.8015C102.727 66.8018 102.727 66.802 102.726 66.8016C102.726 66.8013 102.727 66.8018 102.731 66.8047C102.736 66.8077 102.745 66.8144 102.757 66.8271L104.171 65.4129C103.777 65.018 103.271 64.8 102.704 64.8V66.8ZM102.757 66.8271C102.77 66.8398 102.777 66.8486 102.78 66.853C102.783 66.8573 102.783 66.8588 102.783 66.8581C102.782 66.8573 102.783 66.8572 102.783 66.859C102.783 66.861 102.784 66.8675 102.784 66.88H104.784C104.784 66.3131 104.566 65.8078 104.171 65.4129L102.757 66.8271ZM102.784 66.88V72.92H104.784V66.88H102.784ZM102.784 72.92C102.784 72.9325 102.783 72.939 102.783 72.941C102.783 72.9428 102.782 72.9427 102.783 72.9419C102.783 72.9412 102.783 72.9427 102.78 72.947C102.777 72.9514 102.77 72.9602 102.757 72.9729L104.171 74.3871C104.566 73.9922 104.784 73.4869 104.784 72.92H102.784ZM102.757 72.9729C102.745 72.9856 102.736 72.9923 102.731 72.9953C102.727 72.9982 102.726 72.9987 102.726 72.9984C102.727 72.998 102.727 72.9982 102.725 72.9985C102.723 72.9989 102.717 73 102.704 73V75C103.271 75 103.777 74.782 104.171 74.3871L102.757 72.9729ZM102.704 73H79.8644V75H102.704V73ZM79.8644 73C79.8519 73 79.8454 72.9989 79.8434 72.9985C79.8416 72.9982 79.8417 72.998 79.8424 72.9984C79.8432 72.9987 79.8416 72.9982 79.8374 72.9953C79.833 72.9923 79.8242 72.9856 79.8115 72.9729L78.3973 74.3871C78.7922 74.782 79.2975 75 79.8644 75V73ZM79.8115 72.9729C79.7988 72.9602 79.7921 72.9514 79.7891 72.947C79.7862 72.9427 79.7857 72.9412 79.786 72.9419C79.7863 72.9427 79.7862 72.9428 79.7859 72.941C79.7855 72.939 79.7844 72.9325 79.7844 72.92H77.7844C77.7844 73.4869 78.0024 73.9922 78.3973 74.3871L79.8115 72.9729ZM79.7844 72.92V67.16H77.7844V72.92H79.7844ZM79.7844 67.16C79.7844 66.9092 79.8664 66.6922 80.0915 66.4671L78.6773 65.0529C78.1024 65.6278 77.7844 66.3441 77.7844 67.16H79.7844ZM80.105 66.4534L91.305 54.8134L89.8638 53.4266L78.6638 65.0666L80.105 66.4534ZM90.5844 53.12H80.0644V55.12H90.5844V53.12ZM80.0644 53.12C80.0519 53.12 80.0454 53.1189 80.0434 53.1185C80.0416 53.1182 80.0416 53.118 80.0424 53.1184C80.0432 53.1187 80.0416 53.1182 80.0374 53.1153C80.033 53.1123 80.0242 53.1056 80.0115 53.0929L78.5973 54.5071C78.9922 54.902 79.4975 55.12 80.0644 55.12V53.12ZM80.0115 53.0929C79.9988 53.0802 79.9921 53.0714 79.9891 53.067C79.9862 53.0627 79.9857 53.0612 79.986 53.0619C79.9863 53.0627 79.9862 53.0628 79.9859 53.061C79.9855 53.059 79.9844 53.0525 79.9844 53.04H77.9844C77.9844 53.6069 78.2024 54.1122 78.5973 54.5071L80.0115 53.0929ZM79.9844 53.04V47.08H77.9844V53.04H79.9844ZM79.9844 47.08C79.9844 47.0675 79.9855 47.061 79.9859 47.059C79.9862 47.0572 79.9863 47.0573 79.986 47.0581C79.9857 47.0588 79.9862 47.0573 79.9891 47.053C79.9921 47.0486 79.9988 47.0398 80.0115 47.0271L78.5973 45.6129C78.2024 46.0078 77.9844 46.5131 77.9844 47.08H79.9844ZM80.0115 47.0271C80.0242 47.0144 80.033 47.0077 80.0374 47.0047C80.0416 47.0018 80.0432 47.0013 80.0424 47.0016C80.0416 47.002 80.0416 47.0018 80.0434 47.0015C80.0454 47.0011 80.0519 47 80.0644 47V45C79.4975 45 78.9921 45.218 78.5973 45.6129L80.0115 47.0271ZM80.0644 47H102.184V45H80.0644V47ZM102.184 47C102.197 47 102.203 47.0011 102.205 47.0015C102.207 47.0018 102.207 47.002 102.206 47.0016C102.206 47.0013 102.207 47.0018 102.211 47.0047C102.216 47.0077 102.225 47.0144 102.237 47.0271L103.651 45.6129C103.257 45.218 102.751 45 102.184 45V47ZM102.237 47.0271C102.25 47.0398 102.257 47.0486 102.26 47.053C102.263 47.0573 102.263 47.0588 102.263 47.0581C102.262 47.0573 102.263 47.0572 102.263 47.059C102.263 47.061 102.264 47.0675 102.264 47.08H104.264C104.264 46.5131 104.046 46.0078 103.651 45.6129L102.237 47.0271ZM102.264 47.08V52.76H104.264V47.08H102.264ZM102.264 52.76C102.264 53.0538 102.179 53.2312 102.037 53.3729L103.451 54.7871C104.003 54.2355 104.264 53.5329 104.264 52.76H102.264ZM102.003 53.4092L91.4027 65.1292L92.886 66.4708L103.486 54.7508L102.003 53.4092ZM92.1444 66.8H102.704V64.8H92.1444V66.8Z" fill="#FFFAF8" />
      <path d="M30.7474 28.2104L32.6363 26.3357C32.9315 26.0428 33.445 26.2478 33.445 26.6696V35.1879C33.445 36.7404 32.1759 38 30.6116 38H9.83339C8.26912 38 7 36.7404 7 35.1879V14.5659C7 13.0134 8.26912 11.7538 9.83339 11.7538H25.9778C26.3969 11.7538 26.6095 12.2577 26.3143 12.5565L24.4254 14.4312C24.3368 14.5191 24.2188 14.5659 24.0889 14.5659H9.83339V35.1879H30.6116V28.5385C30.6116 28.4155 30.6588 28.2983 30.7474 28.2104ZM39.9913 16.3879L24.4903 31.7724L19.1541 32.3582C17.6075 32.5281 16.2912 31.2334 16.4624 29.6868L17.0526 24.3907L32.5537 9.0062C33.9054 7.6646 36.0895 7.6646 37.4354 9.0062L39.9854 11.5371C41.3372 12.8787 41.3372 15.0522 39.9913 16.3879ZM34.1593 18.1982L30.7297 14.7944L19.7621 25.6854L19.3312 29.511L23.1858 29.0833L34.1593 18.1982ZM37.9844 13.529L35.4343 10.9981C35.1923 10.7579 34.7968 10.7579 34.5607 10.9981L32.7367 12.8084L36.1663 16.2122L37.9903 14.4019C38.2264 14.1558 38.2264 13.7692 37.9844 13.529Z" fill="#FFFAF8" />
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
