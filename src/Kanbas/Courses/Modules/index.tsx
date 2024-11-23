import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
// import * as db from "../../Database";
import { useState,useEffect } from "react";
import { addModule, editModule,
  updateModule, deleteModule, setModules}
from "./reducer";
import { useSelector, useDispatch }
from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";



export default function Modules() {
  const { cid } = useParams();
  // const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector(
    (state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);


  // const addModule = () => {
  //   setModules([ ...modules, { _id: new Date().getTime().toString(),
  //                name: moduleName, course: cid, lessons: [] } ]);
  //   setModuleName("");
  // };
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((m) => m._id !== moduleId));
  // };
  // const editModule = (moduleId: string) => {
  //   setModules(modules.map((m) => (m._id === moduleId ?
  //     { ...m, editing: true } : m)));
  // };
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m) => (m._id === module._id ?
  //     module : m)));
  // };

  return (
    <div className="wd-modules">
      <ModulesControls setModuleName={setModuleName}
       moduleName={moduleName} addModule={createModuleForCourse} />

      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          // .filter((module: any) => module.course === cid) 
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => dispatch(
                updateModule(
                 { ...module, name: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  
                  // dispatch(
                  //   updateModule({ ...module, editing: false }));
                  saveModule({ ...module, editing: false });
                 }
               }}
               value={module.name}/>
      )}
                {module.name}
                <ModuleControlButtons 
                moduleId={module._id}
                // deleteModule={(moduleId) => {
                //   dispatch(deleteModule(moduleId));}}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) =>
                    dispatch(editModule(moduleId))} />
          
              </div>

              {module.lessons && module.lessons.length > 0 ? ( 
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ps-2">No lessons available for this module.</p>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
