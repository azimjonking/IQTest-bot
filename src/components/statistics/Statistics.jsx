import { Fragment, useState, useEffect } from "react";
import styles from "./Statistics.module.css";
import User from "./User";
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortNumericDown,
  FaSortNumericDownAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/users/usersSlice";
import Loading from "../loading/Loading";

const Statistics = () => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByAge, setSortByAge] = useState(false);
  const [sortByScore, setSortByScore] = useState(false);
  const { users, status, error } = useSelector((state) => state.users);
  const [showData, setShowData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setShowData(users);
  }, [users]);

  // console.log(showData);

  // console.log(users);
  // console.log(status);
  // console.log(error);

  const sortByNameFunction = () => {
    setSortByName(!sortByName);
    setSortByAge(false);
    setSortByScore(false);
    const sortData = users.toSorted((a, b) =>
      sortByName
        ? a.first_name.localeCompare(b.first_name)
        : b.first_name.localeCompare(a.first_name)
    );

    setShowData(sortData);
  };

  const sortByAgeFunction = () => {
    setSortByName(false);
    setSortByAge(!sortByAge);
    setSortByScore(false);
    const sortData = users.toSorted((a, b) =>
      sortByAge ? a.year_old - b.year_old : b.year_old - a.year_old
    );

    setShowData(sortData);
  };

  const sortByScoreFunction = () => {
    setSortByName(false);
    setSortByAge(false);
    setSortByScore(!sortByScore);
    const sortData = users.toSorted((a, b) =>
      sortByScore
        ? a.correctAnswersCount - b.correctAnswersCount
        : b.correctAnswersCount - a.correctAnswersCount
    );

    setShowData(sortData);
  };

  const filterBySearching = (e) => {
    const filterData = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.phone_number.includes(e.target.value) ||
        user.region.toLowerCase().includes(e.target.value)
    );
    setShowData(filterData);
  };

  return (
    <div className={styles.statistics}>
      {status == "loading" && <Loading />}
      {status == "succeeded" && (
        <>
          <h1 className={styles.title}>IQ Test Statistics</h1>
          <div className={styles.result}>
            <div className={styles.total}>
              <span>Total students: {showData && showData.length}</span>
            </div>
            <div className={styles.search}>
              <input
                type="search"
                placeholder="Search by ..."
                onChange={filterBySearching}
              />
            </div>
          </div>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.row}>
                <td>
                  <span>№</span>
                </td>
                <td className={styles.fullname}>
                  <span>Fullname</span>
                  <button className={styles.sort} onClick={sortByNameFunction}>
                    {!sortByName && <FaSortAlphaDown />}
                    {sortByName && <FaSortAlphaDownAlt />}
                  </button>
                </td>
                <td className={styles.phone}>
                  <span>Phone Number</span>
                </td>
                <td className={styles.age}>
                  <span>Age</span>
                  <button className={styles.sort} onClick={sortByAgeFunction}>
                    {!sortByAge && <FaSortNumericDown />}
                    {sortByAge && <FaSortNumericDownAlt />}
                  </button>
                </td>
                <td className={styles.score}>
                  <span>Score</span>
                  <button className={styles.sort} onClick={sortByScoreFunction}>
                    {!sortByScore && <FaSortNumericDown />}
                    {sortByScore && <FaSortNumericDownAlt />}
                  </button>
                </td>
                <td className={styles.address}>
                  <span>Address</span>
                </td>
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              {showData &&
                showData?.map((user, i) => {
                  return (
                    <Fragment key={i}>
                      <User user={user} i={i} />
                    </Fragment>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Statistics;
