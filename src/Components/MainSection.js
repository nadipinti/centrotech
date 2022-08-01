import React, { useState, useEffect } from "react";
import axios from "axios";


const MainSection = ({ searchValue }) => {
  const [listOfCustomer, setListOfCustomer] = useState([]);
  const [selectPageSize, setSelectPageSize] = useState(10);
  const [data,setData] = useState([]);

  const [noOfPages, setNoOfPages] = useState(1);
  const [currentPageNo, setCurrentPageNo] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    axios.get('db/M_D.json')
    .then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  useEffect(() => {
    if (data.length > 0) {
      setNoOfPages(Math.ceil(data.length / selectPageSize));
    }
  }, [selectPageSize, data]);

  // Pagination
  const rightArrowClick = () => {
    if (currentPageNo < noOfPages) {
      setCurrentPageNo(currentPageNo + 1);
    }
  };
  const leftArrowClick = () => {
    if (currentPageNo > 1) {
      setCurrentPageNo(currentPageNo - 1);
    }
  };
  //search filter
  const getFilterValue = (data) => {
    return data.filter((item) => {
      return (
        item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.last_name
          .toLowerCase()
          .includes(searchValue.toString().toLowerCase()) ||
        item.email.toLowerCase().includes(searchValue.toString().toLowerCase())
      );
    });
  };
  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr className="listview__table__heading">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>D.O.B</th>
          </tr>
        </thead>
        <tbody>
          {getFilterValue(data)
            .slice(
              selectPageSize * (currentPageNo - 1),
              selectPageSize * currentPageNo
            )
            .map((item, i) => (
              <React.Fragment>
                <tr className="listview__table__data" key={i}>
                  <td>
                    <div className="customer-details customer-name ms-2">
                      {item.first_name}
                    </div>
                  </td>
                  <td>
                    <div className="customer-details">{item.last_name}</div>
                  </td>
                  <td>
                    <div className="customer-details">{item.email}</div>
                  </td>
                  <td>
                    <div className="customer-details">{item.dob}</div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
      <div className="list--view--pagination">
        <div className="pagination__left">
          <div className="pagination__dropdown">
            <select
              className="pagination_box"
              onChange={(e) => {
                setSelectPageSize(e.target.value);
                setNoOfPages(Math.ceil(data.length / e.target.value));
                setCurrentPageNo(1);
              }}>
              <option value="">Select</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <ul>
            {Array(noOfPages)
              .fill(0)
              .map((p, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => setCurrentPageNo(i + 1)}
                    className={`${
                      i + 1 === currentPageNo
                        ? "active__page"
                        : "showing__page__number"
                    }`}>
                    {i + 1}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="pagination__right">
          <div className="arrow__container me-3" onClick={leftArrowClick}>
            <i className="bi bi-chevron-left font--weight"></i>
          </div>
          <div className="arrow__container" onClick={rightArrowClick}>
            <i className="bi bi-chevron-right font--weight"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
