import Modules from "../Modules";
import CourseStatus from "./Status";
import { useSelector } from "react-redux";

export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="d-flex home-layout" id="wd-home">
      <div className="flex-fill main-content">
        <Modules />
      </div>
      {currentUser?.role === "FACULTY" && (
        <div className="d-none d-xl-block sidebar-status">
          <CourseStatus />
        </div>
      )}
    </div>
  );
}