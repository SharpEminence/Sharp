import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage,agendaData, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
      setNumberOfButoons(Math.ceil(total / showPerPage))
      console.log('vallllllll',counter,Math.ceil(total / showPerPage))
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
        console.log('numberOfButtons',numberOfButtons)
      if (numberOfButtons === counter) {
          console.log('counter',counter)
        setCounter(counter);
      } else {
        console.log('counter11',counter)
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button
              class="page-link"
              href="!#"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </button>
          </li>

          {new Array(numberOfButtons).fill("").map((el, index) => (
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a
                class="page-link"
                href="!#"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li class="page-item">
            <button
              class="page-link"
            //   href="!#"
              onClick={() => onButtonClick("next")}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
