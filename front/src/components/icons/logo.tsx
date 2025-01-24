import React from "react";
import { IconsProps } from "./icons.props";

export const Logo: React.FC<IconsProps> = ({ width = 210, height = 43 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 210 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0312 32.1875C16.0312 31.0208 16.4271 30.0417 17.2188 29.25C18.0521 28.4167 19.0521 28 20.2188 28H29.7812L28.1562 23.375C27.4896 21.6667 26.8229 20.0625 26.1562 18.5625C25.5312 17.0208 24.8021 15.625 23.9688 14.375C23.2188 13.125 22.3646 12.4583 21.4062 12.375C20.4062 12.4583 19.5104 13.125 18.7188 14.375C17.9271 15.625 17.1979 17.0208 16.5312 18.5625C15.9062 20.0625 15.2604 21.6667 14.5938 23.375L8.65625 39.625C8.23958 40.5 7.69792 41.2292 7.03125 41.8125C6.40625 42.3542 5.44792 42.625 4.15625 42.625C2.94792 42.625 1.94792 42.2083 1.15625 41.375C0.40625 40.5417 0.0729167 39.5417 0.15625 38.375C0.197917 37.8333 0.322917 37.3333 0.53125 36.875L7.40625 19.125C9.32292 14.4583 11.2396 10.6875 13.1562 7.8125C15.0312 4.97917 17.7812 3.54167 21.4062 3.5C24.9896 3.54167 27.7188 4.97917 29.5938 7.8125C31.5104 10.6042 33.4271 14.375 35.3438 19.125L42.2188 36.875C42.4271 37.3333 42.5521 37.8333 42.5938 38.375C42.6771 39.5417 42.3229 40.5417 41.5312 41.375C40.7812 42.2083 39.8021 42.625 38.5938 42.625C37.2188 42.625 36.1979 42.3542 35.5312 41.8125C34.9062 41.2292 34.3854 40.5 33.9688 39.625L32.7812 36.375H20.2188C19.0521 36.375 18.0729 35.9583 17.2812 35.125C16.4479 34.3333 16.0312 33.3542 16.0312 32.1875ZM106.594 12.875C107.719 12.9167 108.677 13.3333 109.469 14.125C110.26 14.875 110.677 15.8125 110.719 16.9375V38.5625C110.469 41.0625 109.094 42.4167 106.594 42.625C105.427 42.625 104.406 42.25 103.531 41.5C102.698 40.7083 102.281 39.7292 102.281 38.5625V16.9375C102.323 15.7708 102.76 14.8125 103.594 14.0625C104.427 13.2708 105.427 12.875 106.594 12.875ZM101.344 4.75C101.344 3.58333 101.844 2.58333 102.844 1.75C103.844 0.916667 105.052 0.5 106.469 0.5C107.885 0.5 109.094 0.916667 110.094 1.75C111.094 2.58333 111.594 3.58333 111.594 4.75C111.594 5.95833 111.094 6.97917 110.094 7.8125C109.094 8.64583 107.885 9.0625 106.469 9.0625C105.052 9.0625 103.844 8.64583 102.844 7.8125C101.844 6.97917 101.344 5.95833 101.344 4.75ZM131.281 41.875C127.615 41.75 124.844 40.8958 122.969 39.3125C121.094 37.6875 119.74 35.875 118.906 33.875C118.073 31.8333 117.656 29.7708 117.656 27.6875C117.656 25.5208 118.052 23.4375 118.844 21.4375C119.677 19.3958 121.031 17.5833 122.906 16C124.823 14.375 127.24 13.5417 130.156 13.5H150.406C153.323 13.5417 155.719 14.375 157.594 16C159.51 17.5833 160.865 19.3958 161.656 21.4375C162.49 23.4375 162.906 25.5208 162.906 27.6875C162.906 29.7708 162.49 31.8333 161.656 33.875C160.823 35.875 159.469 37.6875 157.594 39.3125C155.719 40.8958 152.948 41.75 149.281 41.875H131.281ZM129.906 21.875C129.115 21.875 128.427 22.2083 127.844 22.875C127.26 23.5 126.823 24.25 126.531 25.125C126.281 25.9583 126.156 26.7917 126.156 27.625C126.156 28.5 126.281 29.375 126.531 30.25C126.823 31.0833 127.26 31.8333 127.844 32.5C128.427 33.125 129.115 33.4583 129.906 33.5H150.656C151.448 33.4583 152.135 33.125 152.719 32.5C153.302 31.8333 153.719 31.0833 153.969 30.25C154.26 29.375 154.406 28.5 154.406 27.625C154.406 26.7917 154.26 25.9583 153.969 25.125C153.719 24.25 153.302 23.5 152.719 22.875C152.135 22.2083 151.448 21.875 150.656 21.875H129.906ZM190.031 12.5625C192.198 12.5625 194.323 12.8125 196.406 13.3125C198.531 13.8125 200.552 14.5625 202.469 15.5625C204.385 16.5208 206.073 17.8125 207.531 19.4375C209.031 21.0625 209.844 23 209.969 25.25V27.875V38.5625C209.719 41.0625 208.344 42.4167 205.844 42.625C204.677 42.625 203.656 42.25 202.781 41.5C201.948 40.7083 201.531 39.7292 201.531 38.5625V35.8125V27.1875C201.448 25.8958 200.948 24.8333 200.031 24C199.156 23.125 198.156 22.4375 197.031 21.9375C195.948 21.4375 194.802 21.0625 193.594 20.8125C192.427 20.5625 191.24 20.4375 190.031 20.4375C188.823 20.4375 187.615 20.5625 186.406 20.8125C185.24 21.0625 184.094 21.4375 182.969 21.9375C181.885 22.4375 180.885 23.125 179.969 24C179.094 24.8333 178.615 25.8958 178.531 27.1875V35.8125V38.5625C178.323 41.0625 176.969 42.4167 174.469 42.625C173.302 42.625 172.281 42.25 171.406 41.5C170.573 40.7083 170.156 39.7292 170.156 38.5625V27.875V25.25C170.281 23 171.073 21.0625 172.531 19.4375C173.99 17.8125 175.677 16.5208 177.594 15.5625C179.51 14.5625 181.51 13.8125 183.594 13.3125C185.719 12.8125 187.865 12.5625 190.031 12.5625Z"
        fill="white"
      />
      <path
        d="M67.2812 38C64.0729 40.4167 60.9688 41.7083 57.9688 41.875H51.4688C50.3438 41.8333 49.3854 41.4375 48.5938 40.6875C47.8438 39.8958 47.4479 38.9375 47.4062 37.8125C47.4062 36.6458 47.7812 35.6458 48.5312 34.8125C49.3229 33.9792 50.3021 33.5417 51.4688 33.5H57.3438C58.9271 33.4167 60.5729 32.8125 62.2812 31.6875C63.9896 30.5625 65.4062 29.2708 66.5312 27.8125C66.6562 27.6875 66.7812 27.5417 66.9062 27.375C65.7812 26 64.4062 24.7708 62.7812 23.6875C61.0729 22.5625 59.4271 21.9583 57.8438 21.875H51.9688C50.8021 21.8333 49.8229 21.3958 49.0312 20.5625C48.2812 19.7292 47.9062 18.7292 47.9062 17.5625C47.9479 16.4375 48.3438 15.5 49.0938 14.75C49.8854 13.9583 50.8438 13.5417 51.9688 13.5H58.4688C61.4688 13.6667 64.5729 14.9583 67.7812 17.375C69.1562 18.4167 70.4479 19.6042 71.6562 20.9375C72.8646 19.6042 74.1771 18.4167 75.5938 17.375C78.7604 14.9583 81.8438 13.6667 84.8438 13.5H91.3438C92.4688 13.5417 93.4062 13.9583 94.1562 14.75C94.9479 15.5 95.3646 16.4375 95.4062 17.5625C95.4062 18.7292 95.0104 19.7292 94.2188 20.5625C93.4688 21.3958 92.5104 21.8333 91.3438 21.875H85.4688C83.8854 21.9583 82.2396 22.5625 80.5312 23.6875C78.9062 24.7708 77.5312 26 76.4062 27.375C76.5312 27.5417 76.6562 27.6875 76.7812 27.8125C77.9062 29.2708 79.3229 30.5625 81.0312 31.6875C82.7396 32.8125 84.3854 33.4167 85.9688 33.5H91.8438C93.0104 33.5417 93.9688 33.9792 94.7188 34.8125C95.5104 35.6458 95.9062 36.6458 95.9062 37.8125C95.8646 38.9375 95.4479 39.8958 94.6562 40.6875C93.9062 41.4375 92.9688 41.8333 91.8438 41.875H85.3438C82.3438 41.7083 79.2604 40.4167 76.0938 38C74.4688 36.75 72.9896 35.3958 71.6562 33.9375C70.3229 35.3958 68.8646 36.75 67.2812 38Z"
        fill="#0385E6"
      />
    </svg>
  );
};
