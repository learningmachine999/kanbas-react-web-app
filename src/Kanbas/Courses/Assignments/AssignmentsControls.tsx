import { FaPlus } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

export default function AssignmentsControls() {
    const assignments = [
        {
            id: '123',
            name: 'A1 - ENV + HTML',
            href: '#/Kanbas/Courses/1234/Assignments/123',
            modules: 'Multiple Modules',
            availability: 'Not available until May 6 at 12:00am',
            dueDate: 'May 13 at 11:59pm',
            points: 100,
        },
        {
            id: '124',
            name: 'A2 - CSS + BOOTSTRAP',
            href: '#/Kanbas/Courses/1234/Assignments/124',
            modules: 'Multiple Modules',
            availability: 'Not available until May 13 at 12:00am',
            dueDate: 'May 20 at 11:59pm',
            points: 100,
        },
        {
            id: '125',
            name: 'A3 - JAVASCRIPT + REACT',
            href: '#/Kanbas/Courses/1234/Assignments/125',
            modules: 'Multiple Modules',
            availability: 'Not available until May 20 at 12:00am',
            dueDate: 'May 27 at 11:59pm',
            points: 100,
        },
    ];
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <span className="me-1 position-relative">
        
                <div className="d-flex align-items-center mb-1">
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                            <CiSearch className="text-gray-500" />
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Search..."
                        />
                    </div>
                    <button className="btn btn-outline-secondary  ms-5">+ Group</button>
                    <button className="btn btn-danger ms-2">+ Assignment</button>
                </div>

            </span>
        </div>

    );
}