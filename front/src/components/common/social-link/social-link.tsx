import icons from "../../icons";
import styles from "./social-link.module.scss";

export interface SocialLinkTypes {
  _id?: string;
  iconName?: string;
  backdropColor?: string;
  label?: string;
  href?: string;
  showOnFront?: boolean;
}

export const SocialLink: React.FC<SocialLinkTypes> = ({
  backdropColor,
  href,
  iconName,
  label,
}) => {
  return (
    <a href={href} target="_blank" className={styles.link}>
      <div
        className={styles.backdrop}
        style={{ background: backdropColor || "#000" }}
      ></div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <div className={styles.icon}>{icons[iconName || "deafult"]}</div>
      <span>{label}</span>
    </a>
  );
};
