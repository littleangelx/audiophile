import { Outlet } from "react-router-dom";

import styles from "./CategoryLayout.module.css";
import CategoryCards from "../components/CategoryCards";
import BestAudioGear from "../components/BestAudioGear";

const CategoryLayout = () => {
  const urlArray = window.location.href.split("/");
  const product = urlArray[urlArray.length - 1];

  return (
    <div>
      <div className={styles.categoryName}>{product}</div>
      <Outlet />
      <CategoryCards />
      <BestAudioGear />
    </div>
  );
};

export default CategoryLayout;
