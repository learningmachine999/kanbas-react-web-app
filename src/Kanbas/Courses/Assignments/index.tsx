import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import GreenCheckmark from './GreenCheckmark';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssignmentControlButtons from './AssignmentControlButtons';
import { MdAssignmentAdd } from "react-icons/md";


import AssignmentsControls from './AssignmentsControls';

export default function Assignments() {
  const assignments = [
    {
      id: '123',
      name: 'A1',
      href: '#/Kanbas/Courses/1234/Assignments/123',
      modules: 'Multiple Modules',
      availability: 'Not available until May 6 at 12:00am',
      dueDate: 'May 13 at 11:59pm',
      points: 100,
    },
    {
      id: '124',
      name: 'A2',
      href: '#/Kanbas/Courses/1234/Assignments/124',
      modules: 'Multiple Modules',
      availability: 'Not available until May 13 at 12:00am',
      dueDate: 'May 20 at 11:59pm',
      points: 100,
    },
    {
      id: '125',
      name: 'A3',
      href: '#/Kanbas/Courses/1234/Assignments/125',
      modules: 'Multiple Modules',
      availability: 'Not available until May 20 at 12:00am',
      dueDate: 'May 27 at 11:59pm',
      points: 100,
    },
  ];
 
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const [searchTerm, setSearchTerm] = useState('');


  const filteredAssignments = assignments.filter((assignment) =>
    assignment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="wd-assignments">
     
      <AssignmentsControls />

      <div className="container mt-1">
    
        <div className="d-flex justify-content-between align-items-center p-3 bg-light" style={{ cursor: 'pointer' }} onClick={toggleCollapse}>
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            {isOpen ? <BsChevronDown className="me-2" /> : <BsChevronRight className="me-2" />}
            <h5 className="mb-0">ASSIGNMENTS</h5>
          </div>
          <div className="d-flex align-items-center">
            <span className="badge bg-light text-dark me-2">40% of Total</span>
            <BsGripVertical className="me-2 fs-3" />
          </div>
        </div>

        <ul id="wd-assignment-list">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
    
              <div className={`collapse ${isOpen ? 'show' : ''}`}>
                <div className="list-group">
               
                  <div className="list-group-item d-flex align-items-center justify-content-between border-bottom wd-assignment">
                    <div className="d-flex align-items-center">
                    
                      <div className="border-start border-success border-2 me-2" style={{ height: '100%' }}></div>
                      <BsGripVertical className="me-2 fs-3" />
                      <MdAssignmentAdd className="me-2 fs-3" />
                      <div>
                        <a className="wd-assignment-link" href={assignment.href}>
                          {assignment.name}
                        </a>
                        <p className="mb-0 text-muted">
                          <span className="text-danger">{assignment.modules}</span> | {assignment.availability}
                        </p>
                        <p className="mb-0 text-muted"><strong>Due {assignment.dueDate} | {assignment.points} pts</strong></p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">

                      <AssignmentControlButtons />
                    </div>
                  </div>
                </div>
              </div>
            )
            )
          ) : (
            <li>No assignments found</li>
          )}
        </ul>
      </div>
    </div>
  );
}